### React面试题02 ###
**01.React中key的作用是什么？**<br>
1.Key是React用于追踪哪些元素被修改，被添加或被移除的标识。在开发过程中，需要确保key值在同级元素中是唯一的。<br>
2.在React Diff算法中React会借助元素的Key值来判断该元素是新创建的还是被移动过来的，从而减少不必要的元素重新渲染。<br>
3.React还需要借助Key值来判断元素与本地状态的关联关系。<br>

    render(){
    	return ({
    	 <ul>
    		{
    			this.state.list.map((item,key) => {
    			return <li key = {key}> {item} </li>
    			})
    		}
    	</ul>
    })
    }

**02.调用setState之后发生了什么？**<br>
1.在代码中调用setState函数后，React会将传入的**参数对象与当前的状态合并**，触发调和过程(Reconciliation);<br>
2.经过调和过程，React会以相对高效的方式根据新的状态构建React元素树，重新渲染UI视图界面；<br>
3.React得到新的元素树后，会自动计算新旧元素树的节点差异，然后根据差异对界面进行最小化重新渲染；<br>
4.在差异计算算法中，React能够相对精确地知道哪些位置发生了改变以及应该如何改变，保证按需更新。<br>

**03.React生命周期函数**<br>

**初始化阶段：**<br>
getDefaultProps: 获取实例的默认属性<br>
getInitialState: 获取每个实例的初始化状态<br>
componentWillMount: 组件即将被挂载、渲染到页面上<br>
render: 组件在这个生成虚拟的DOM节点<br>
componentDidMount:组件真正被挂载到页面上<br>
**运行中状态:**<br>
componentWillReceiveProps: 组件将要接收到属性的时候调用；<br>
shouldComponentWillUpdate: 组件接收到新属性或新状态时调用(返回false，接收数据后不更新，阻止render调用，后面的函数不会被继续执行)<br>
componentWillUpdate: 组件即将更新不能修改属性和状态；<br>
render: 组件重绘；<br>
componentDidUpdate: 组件已经更新;<br>
**销毁阶段：**
componentWillUnMount:组件即将销毁；<br>

**04.shouldComponentUpdate是做什么的(React性能优化是哪个周期函数?)**<br>

shouldComponentUpdate这个方法用来判断是否需要调用render方法重新渲染DOM。因为渲染DOM非常消耗性能，如果能够在shouldComponent中写出更优化的dom diff算法，可以极大的提高性能。<br>

**05.为什么虚拟DOM会提高性能？**

虚拟DOM相当于在JS和真实DOM中间加了一个缓存，利用DOM Diff算法避免了没有必要的DOM操作，从而提高性能。

虚拟DOM用JS对象结构表示DOM树的结构；然后利用这个树构建一个真正的DOM树。

当文档中状态变更时，比较新旧树之间的差异，并记录该差异，只对差异部分做修改。


