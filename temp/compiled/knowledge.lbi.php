<div class="knowledge block clearfix">
    <div class="knowtab clearfix">
        <div <?php if ($this->_var['cat_id'] == 4): ?>class="active"<?php endif; ?> id="knowtab_0"><a href="article_cat.php?id=4">优水知识</a></div>
        <div <?php if ($this->_var['cat_id'] == 13): ?>class="active"<?php endif; ?> id="knowtab_1"><a href="article_cat.php?id=13">优水热点</a></div>
    </div>
    <div class="knowlist clearfix">
    <?php if ($this->_var['cat_id'] == 4): ?>
        <div id="knowtab_0_sub">
            关键字：
            <a <?php if ($this->_var['search_value'] == "婴儿"): ?>class="knowselect" <?php endif; ?> href="<?php echo $this->_var['link']; ?>&keywords=婴儿">婴儿</a>
            <a <?php if ($this->_var['search_value'] == "幼儿"): ?>class="knowselect" <?php endif; ?> href="<?php echo $this->_var['link']; ?>&keywords=幼儿">幼儿</a>
            <a <?php if ($this->_var['search_value'] == "孕妇"): ?>class="knowselect" <?php endif; ?> href="<?php echo $this->_var['link']; ?>&keywords=孕妇">孕妇</a>
            <a <?php if ($this->_var['search_value'] == "成年人"): ?>class="knowselect" <?php endif; ?> href="<?php echo $this->_var['link']; ?>&keywords=成年人">成年人</a>
            <a <?php if ($this->_var['search_value'] == "老年人"): ?>class="knowselect" <?php endif; ?> href="<?php echo $this->_var['link']; ?>&keywords=老年人">老年人</a>
        </div>
        <?php else: ?>
       <div id="knowtab_0_sub">
            关键字：
            <a <?php if ($this->_var['search_value'] == "婴儿"): ?>class="knowselect" <?php endif; ?> href="<?php echo $this->_var['link']; ?>&keywords=婴儿">婴儿</a>
            <a <?php if ($this->_var['search_value'] == "幼儿"): ?>class="knowselect" <?php endif; ?> href="<?php echo $this->_var['link']; ?>&keywords=幼儿">幼儿</a>
            <a <?php if ($this->_var['search_value'] == "孕妇"): ?>class="knowselect" <?php endif; ?> href="<?php echo $this->_var['link']; ?>&keywords=孕妇">孕妇</a>
            <a <?php if ($this->_var['search_value'] == "成年人"): ?>class="knowselect" <?php endif; ?> href="<?php echo $this->_var['link']; ?>&keywords=成年人">成年人</a>
            <a <?php if ($this->_var['search_value'] == "老年人"): ?>class="knowselect" <?php endif; ?> href="<?php echo $this->_var['link']; ?>&keywords=老年人">老年人</a>
        </div>
        <?php endif; ?>
    </div>

</div>