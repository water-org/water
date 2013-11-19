<div class="clearfix blank">
  <div class="pageNav fl">
	 <ul class="clearfix">
		 <li <?php if ($this->_var['navigator_list']['config']['index'] == 1): ?> class="curs"<?php endif; ?>><a href="index.php"><?php echo $this->_var['lang']['home']; ?><br/>Home</a></li>
		 <?php $_from = $this->_var['navigator_list']['middle']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'nav_0_92797600_1384856084');$this->_foreach['nav_middle_list'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['nav_middle_list']['total'] > 0):
    foreach ($_from AS $this->_var['nav_0_92797600_1384856084']):
        $this->_foreach['nav_middle_list']['iteration']++;
?>
			<li <?php if ($this->_var['nav_0_92797600_1384856084']['active'] == 1): ?> class="curs"<?php endif; ?>><a href="<?php echo $this->_var['nav_0_92797600_1384856084']['url']; ?>" <?php if ($this->_var['nav_0_92797600_1384856084']['opennew'] == 1): ?>target="_blank" <?php endif; ?>><?php echo $this->_var['nav_0_92797600_1384856084']['name']; ?></a></li>
		 <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
		 </ul>
	</div>
	
</div>
