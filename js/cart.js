!function() {
    var cartBtnEl = document.getElementById('cartBtn'),
        cartListEl = document.getElementById('cartList'),
        cartTimer;
    cartBtnEl.onmouseover = function() {
        var update = cartBtnEl.getAttribute('update');// 标示是否需要重新请求
        clearTimeout(cartTimer);
        if (update == '1') {
            cartBtnEl.setAttribute('update', '0');
            Ajax.call('ajax.php?type=cart_info', '', showCartList, 'GET', 'JSON');
        } else {
            cartListEl.style.display = 'block';
        }
    };
    cartBtnEl.onmouseout = function() {
        cartTimer = setTimeout(function(){
            cartListEl.style.display = 'none';
        }, 128);
    };
    cartBtnEl.onclick = function() {
        location.href = "flow.php";
    };
    /**
     * 显示购物车明细列表
     */
    function showCartList(result) {
        if (!result.goods_list || !result.goods_list.length) {
            return;
        }
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
            '<a class="payforgoods" href="flow.php"></a>'
        ];
        var html = Tutu.Template(tpl, result);
        cartListEl.innerHTML = html;
        cartListEl.style.display = 'block';
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
