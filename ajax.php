<?php
define('IN_ECS', true);

require(dirname(__FILE__) . '/includes/init.php');
require(ROOT_PATH . 'includes/lib_order.php');

$type = $_REQUEST['type'] ? $_REQUEST['type'] : '';
if ($type == 'cart_info') {
	$cart_info = get_cart_goods();
	echo json_encode($cart_info);
} else {
	echo json_encode(array('errno' => -100, 'msg' => 'type is null'));
}