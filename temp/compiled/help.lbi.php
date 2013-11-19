<?php if ($this->_var['helps']): ?>
<div class="block">
      <div class="helpbox">
         <?php $_from = $this->_var['helps']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'help_cat');if (count($_from)):
    foreach ($_from AS $this->_var['help_cat']):
?>
            <div class="goodsbox">
             <div class="helpTit">
                <?php echo $this->_var['help_cat']['cat_name']; ?>
            </div>
             <div class="helpList tl">
                <?php $_from = $this->_var['help_cat']['article']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'item_0_68689800_1384863198');if (count($_from)):
    foreach ($_from AS $this->_var['item_0_68689800_1384863198']):
?>
                ·<a href="<?php echo $this->_var['item_0_68689800_1384863198']['url']; ?>" title="<?php echo htmlspecialchars($this->_var['item_0_68689800_1384863198']['title']); ?>"><?php echo $this->_var['item_0_68689800_1384863198']['short_title']; ?></a><br />
                <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
             </div>
            </div>
         <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>    
         <div class="share">
            <p class="share_title">分享到：</p>
            <script type="text/javascript">R
                bShareOpt = {
                   uuid: "", 
                   url: "http://baidu.com", //商品的永久链接
                   summary: "<?php echo $this->_var['goods']['goods_brief']; ?>", //商品描述
                   pic: "./../<?php echo $this->_var['goods']['goods_img']; ?>", //商品图片链接
                   vUid: "", //用户id，为了让您能够知道您网站的注册用户分享、喜欢了哪些商品
                   product: "<?php echo $this->_var['goods']['goods_name']; ?>", //商品名称
                   price: "<?php echo $this->_var['goods']['shop_price']; ?>", //商品价格
                   brand: "<?php echo $this->_var['goods']['goods_brand']; ?>", //商品品牌
                   tag: "<?php echo $this->_var['value']['label']; ?>", //商品标签
                   category: "<?php echo $this->_var['cat_data']['cat_name']; ?>", //商品分类
                   template: "1" 
                };
                </script>
                <a class="bsLikeDiv" href="http://static.bshare.cn"></a>
                <script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/bshareLike.js#amp;style=2"></script><div class="bshare-custom icon-medium" style="float:left;"><a title="分享到QQ空间" class="bshare-qzone"></a><a title="分享到新浪微博" class="bshare-sinaminiblog"></a><a title="分享到人人网" class="bshare-renren"></a><a title="分享到腾讯微博" class="bshare-qqmb"></a><a title="分享到搜狐微博" class="bshare-sohuminiblog"></a></div><script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/button.js#style=-1&amp;ssc=false&amp;mdiv=-1&amp;type=15"></script><script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/bshareC2.js"></script>


         </div>

        </div>

</div> 
<?php endif; ?>