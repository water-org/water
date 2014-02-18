!function() {
    var cartBtnEl = document.getElementById('cartBtn'),
        cartListEl = document.getElementById('cartList'),
        ECS_CARTINFO = document.getElementById('ECS_CARTINFO'),
        cartTimer;
        cartListEl.style.display="none";
    cartBtnEl.onmouseover = function() {
        
    };
    ECS_CARTINFO.onclick = function() {
        return false;
    };
    cartBtnEl.onclick = function(e) {
        if(cartListEl.style.display == 'none'){
            var update = cartBtnEl.getAttribute('update');// 标示是否需要重新请求
            clearTimeout(cartTimer);
            if (update == '1') {
                cartBtnEl.setAttribute('update', '0');
                Ajax.call('ajax.php?type=cart_info', '', showCartList, 'GET', 'JSON');
            } else {
                cartListEl.style.display = 'block';
            }
        }else{
            cartTimer = setTimeout(function(){
                cartListEl.style.display = 'none';
            }, 128);
            //location.href = "flow.php";
        }
        
    };
    /**
     * 显示购物车明细列表
     */
    function showCartList(result) {
        if (!result.goods_list || !result.goods_list.length) {
            var html = "<p style='text-align: center;'>购物车中还没有商品，赶紧选购吧！</p>";
            cartListEl.innerHTML = html;
            cartListEl.style.display = 'block';
        }else{
            var tpl = ['<ul>',
                '<% for(var i =0,goods; goods = goods_list[i]; i++) { %>',
                '<li>',
                    '<div class="cl-img"><a href="goods.php?id=<%=goods.goods_id%>" target="_blank"><img src="<%=goods.goods_thumb%>"/></a></div>',
                    '<div class="cl-name">',
                        '<a href="goods.php?id=<%=goods.goods_id%>" target="_blank"><%=goods.goods_name%></a>',
                        '<p>适用范围：<%=goods.goods_attr%></p>',
                        '<p>水源产地：<%=goods.goods_attr%></p>',
                    '</div>',
                    '<img id="cartListDel" onclick="delCartGoodsById(<%=goods.rec_id%>)" src="themes/3cShop/images/del.png" class="cartlist-delicon">',
                '</li>',
                '<% } %>',
                '</ul>',
                '<a class="payforgoods" href="flow.php"></a>',
                '<p id="carttotalbox"></p>'
            ];
            var html = Tutu.Template(tpl, result);
        
            cartListEl.innerHTML = html;
            cartListEl.style.display = 'block';
            var carttotalbox = document.getElementById('carttotalbox');
            var carttotaltext = document.getElementById('carttotal').innerHTML;
            carttotalbox.innerHTML = carttotaltext;
            carttotalbox.onclick = function(){
                return false;
            };
        }
    }
    /**
     *
     */
    window.delCartGoodsById = function(id) {
        Ajax.call('flow.php?step=ajaxdrop_goods', 'id=' + id, delCartGoods, 'GET', 'JSON');
    }
    function delCartGoods(result) {
        if (result.drop_count === '1') {
            Ajax.call('ajax.php?type=cart_info', '', showCartList, 'GET', 'JSON');
        }
    }
}();
