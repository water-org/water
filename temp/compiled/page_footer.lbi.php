<div class="block tc footer">
    <div class="footer_nav">
        <?php if ($this->_var['navigator_list']['bottom']): ?>
        <?php $_from = $this->_var['navigator_list']['bottom']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'nav_0_42063000_1385037666');$this->_foreach['nav_bottom_list'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['nav_bottom_list']['total'] > 0):
    foreach ($_from AS $this->_var['nav_0_42063000_1385037666']):
        $this->_foreach['nav_bottom_list']['iteration']++;
?>
        <a href="<?php echo $this->_var['nav_0_42063000_1385037666']['url']; ?>" <?php if ($this->_var['nav_0_42063000_1385037666']['opennew'] == 1): ?>
            target="_blank"
            <?php endif; ?>><?php echo $this->_var['nav_0_42063000_1385037666']['name']; ?></a>
        <?php if (! ($this->_foreach['nav_bottom_list']['iteration'] == $this->_foreach['nav_bottom_list']['total'])): ?>
        |
        <?php endif; ?>
        <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>

        <?php endif; ?> 
    </div>
    <div class="copyright clearfix">
        版权声明 <?php echo $this->_var['copyright']; ?> 优意创享 技术支持    客服热线： 123456789
        <br/>
        京公网安备 110105001608 | 京ICP证111033 | 食品流通许可证 SP1101051110165515 | 营业执照
        <img src="themes/3cShop/images/ry.jpg" >
    </div>
</div>
</div></div>
