/**
 * DOM树构建完成之后，HTML就被成为Document对象
 * JS通过事件与HTML交互 通过JavaScript代码，可以向HTML元素添加事件处理程序
 * DOM2级事件规定事件包括三个阶段：捕获、目标、冒泡（之所以要分捕获冒泡，是因为整个DOM树（树--数据结构）可以被完全的访问）
 * 捕获阶段--DOM事件从上（Document）至下，为事件的截获提供机会
 * 目标阶段--目标接受事件
 * 冒泡阶段--对事件进行处理
 * */
