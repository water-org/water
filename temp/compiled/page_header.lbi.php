<script type="text/javascript">
var process_request = "<?php echo $this->_var['lang']['process_request']; ?>";
var btn_buy = "<?php echo $this->_var['lang']['btn_buy']; ?>";
var is_cancel = "<?php echo $this->_var['lang']['is_cancel']; ?>";
var select_spe = "<?php echo $this->_var['lang']['select_spe']; ?>";
</script>
<div class="main_box clearfix">
<div class="main_box clearfix">
<div class="pageTop">
    <div class="block clearfix">
        <div class="fr">
            <?php echo $this->smarty_insert_scripts(array('files'=>'transport.js,utils.js')); ?> <font id="ECS_MEMBERZONE"><?php 
$k = array (
  'name' => 'member_info',
);
echo $this->_echash . $k['name'] . '|' . serialize($k) . $this->_echash;
?>|</font> 
            <?php if ($this->_var['navigator_list']['top']): ?>
            <?php $_from = $this->_var['navigator_list']['top']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'nav');$this->_foreach['nav_top_list'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['nav_top_list']['total'] > 0):
    foreach ($_from AS $this->_var['nav']):
        $this->_foreach['nav_top_list']['iteration']++;
?>
            <a href="<?php echo $this->_var['nav']['url']; ?>" <?php if ($this->_var['nav']['opennew'] == 1): ?>
                target="_blank"
                <?php endif; ?>><?php echo $this->_var['nav']['name']; ?></a>
            <?php if (! ($this->_foreach['nav_top_list']['iteration'] == $this->_foreach['nav_top_list']['total'])): ?>
            |
            <?php endif; ?>
            <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
            <?php endif; ?> </div>
    </div>
</div>
<div class="searchbox">
    <div class="logo fl">
        <a href="index.php">
            <img src="themes/3cShop/images/logo.gif" alt="<?php echo $this->_var['page_title']; ?>" />
        </a>
    </div>
    <div class="formbox fr">
        <form id="searchForm" name="searchForm" method="get" action="search.php" onSubmit="return checkSearchForm()" >
            <select name="category" id="category">
                <option value="0"><?php echo $this->_var['lang']['all_category']; ?></option>
                <?php echo $this->_var['category_list']; ?>
            </select>
            <input name="keywords" type="text" id="keyword" value="<?php echo htmlspecialchars($this->_var['search_keywords']); ?>" class="fl"/>
            <input name="imageField" type="image" src="themes/3cShop/images/search.jpg" class="search_submit fr" />
        </form>
        <div class="advanced">
            <a href="search.php?act=advanced_search"><?php echo $this->_var['lang']['advanced_search']; ?></a>
        </div>
        <?php if ($this->_var['searchkeywords']): ?>
        <div class="hot_search"> <font color="#424242"><?php echo $this->_var['lang']['hot_search']; ?>：</font>
            <?php $_from = $this->_var['searchkeywords']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'val');$this->_foreach['keywords'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['keywords']['total'] > 0):
    foreach ($_from AS $this->_var['val']):
        $this->_foreach['keywords']['iteration']++;
?>
            <a href="search.php?keywords=<?php echo urlencode($this->_var['val']); ?>"><?php echo $this->_var['val']; ?></a>
            <?php if (! ($this->_foreach['keywords']['iteration'] == $this->_foreach['keywords']['total'])): ?>
            <font color="#cbc9c9">|</font>
            <?php endif; ?><?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?></div>
        <?php endif; ?>
        <script type="text/javascript">
    
    <!--
        var ms = new makeSelect();
        ms.info("category");
    function checkSearchForm()
    {
        if(document.getElementById('keyword').value)
        {
            return true;
        }
        else
        {
                    alert("<?php echo $this->_var['lang']['no_keywords']; ?>");
            return false;
        }
    }
    --></script>

        
        <a class="collection" href="user.php?act=collection_list"><?php 
$k = array (
  'name' => 'collect_num',
);
echo $this->_echash . $k['name'] . '|' . serialize($k) . $this->_echash;
?></a>

        <div class="cartBox">
            <?php echo $this->smarty_insert_scripts(array('files'=>'transport.js')); ?>
            <span  id="ECS_CARTINFO" class="none"><?php 
$k = array (
  'name' => 'cart_info',
);
echo $this->_echash . $k['name'] . '|' . serialize($k) . $this->_echash;
?></span>
            <span id="a1"><?php 
$k = array (
  'name' => 'cart_info',
);
echo $this->_echash . $k['name'] . '|' . serialize($k) . $this->_echash;
?></span>

            <p class="none">
                <a href="flow.php">去结算</a>
            </p>
        </div>

        <div class="process">
            <img src="themes/3cShop/images/authenticity.jpg"/>
            <img src="themes/3cShop/images/shipping.jpg"/>
            <img src="themes/3cShop/images/ship.jpg"/>
        </div>
    </div>
</div>