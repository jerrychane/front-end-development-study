## 50个React面试题和答案 ##
以下是从几个技术网站收集到的面试官可能问到的50个React面试题和答案。为了方便学习，对他们进行了分类：<br>
**一、 基本知识;  二、React Component;  三、React Redux;  四、React Router** <br>
## 一、基本知识
**1.区分Real DOM 和 Vitual DOM**<br>
**Real DOM**: 1.更新慢 ； 2.可直接更新HTML；3.元素更新，创建新DOM； 4.DOM操作复杂； 5.消耗内存多；<br>
**Vitual DOM**:1.更新快；2.无法直接更新HTML；3.元素更新，更新JSX；4.DOM操作简单；5.消耗内存少；<br>

**2.什么是React?** React是Facebook在2011年开发的前端JavaScript库，它遵循基于组件的方法，有助于构建可重用的UI组件，多用于开发复杂和交互较多的Web和移动UI，在2015年进行开源，拥有很大的支持社区。<br>

**3.React有什么特点？** a.虚拟DOM b.服务器端渲染 c.单向数据流(数据绑定)

**4.React主要优点** a.提高应用的性能 b.方便在客户端和服务端使用 c.JSX代码可读性好 d.容易与其他框架集成 5.编写UI测试用例容易

**5.React主要缺点** a.因为它使用内联模板和JSX语法，同时拥有庞大的库，新手学习起来较难理解，需要时间来理解。

**6.什么是JSX？** JSX是JavaScript和XML的简写，遇到标签"<"和">"按HTML语法解析，遇到"{"和"}"则按JavaScript语法解析。举例如下：<br>
 `render(){ return (<div> <h1>Hello,React</h1> </div>) }`

**7.你了解Vitual DOM吗？解释一下它的工作原理。**<br>
Vitual DOM是一个轻量级的JS对象，它最初只是Real DOM的一个副本。它是一个节点树，将元素以及它们的属性和内容作为其对象和属性。React渲染函数从React组件中创建一个节点树，然后响应数据模型中的变化来更新该节点树。<br>
Vitual DOM工作过程有三个简单的步骤：<br>
（1）每当底层数据发生改变时，整个UI都都将在Vitual DOM中重新渲染；<br>
（2）然后计算新旧DOM之间的差异；<br>
（3）计算完成后，将实际更改的内容更新到Real DOM中。<br>

**8.为什么浏览器无法读取JSX？**<br>
浏览器只能读取JavaScript对象，而不能读取JavaScript对象中的JSX。如果要读取，需要用Babel转换器将JSX编译为能够被浏览器读取的JavaScript对象。

**9.与ES5相比，React的ES6语法有何不同？**<br>
(1).require与import <br>

	// ES5 
    var React = require('react');
	//ES6 
    import React from 'react'
(2). export与exports<br>
	
	// ES5
    module.exports = Component;
	//ES6 
    export default Component;
(3). component与function<br>

    // ES5
	var myComponent = React.createClass({
		render:fucntion(){
			return <h3>Hello</h3>
			}
	});
	// ES6
	class myComponent extends React.Component{	
		return(){
		 	<h3>Hello React</h3>
		}
	}

(4).props<br>

	// ES5 
	var App = React.createClass({
	  propTypes:{name:React.ProtoTypes.string},
	  render:function(){
		  return <h3>hello,{this.props.name}!</h3>;
		}
	})
	// ES6
     class App extends React.Component{
		render(){	
			return <h3>hello,{this.props.name}</h3>;
     	}
	}	
(5).state<br>

	// ES5
	var App = React.createClass({
		getInitialState:function(){
			return {name:"jerrychane"};
		},
		render:function(){
			return <h3>hello,{this.state.name}</h3>	
		}
	})
	// ES6
	class App extends React.Component{
		constructor(){
			super();
			this.state={name:"jerrychane"};
		},
		render(){
			return <h3>hello,{this.state.name}</h3>;
		}
	}
**10.React与Angular的区别**<br>
主要从（1）体系结构 （2）渲染 （3）DOM (4)数据绑定 （5）调试 （6）作者 六个方面比较<br>
React只有MVC中的View,可进行服务器端渲染，使用Vitual DOM,单向数据绑定，编译时调试，Facebook发布;<br>
Angular是完整的MVC，客户端渲染，使用Real DOM,双向数据绑定，运行时调试，Google发布

## 二、Reac组件 ##
**11.如何理解“在React中，一切都是组件”？**<br>
组件是React应用UI的构建块。这些组件整个UI分成小的独立可重用的部分,每个组件彼此独立。

**12.怎么解释React中的Render()**<br>
每个React组件都必须有一个render(),它返回一个React元素，是原生DOM组件的表示。如果需要渲染多个HTML元素，则必须将它们组合在一个封闭标签内。此函数必须保持纯净，即每次调用时都返回相同的结果。

**13.如何将两个或多个组件嵌入到一个组件中**<br>
可以通过以下方式将组件嵌套到一个组件中：<br>

	class Mycomponent extends React.Component{
	 	render(){
				return (<div>
				<h1>hello</h1>
				<Header/>
			</div>);
			}
	}
	class Header extends React.Component{
		render(){
			return <h1>Header Component</h1>
		}
	}
	ReactDOM.render(<Mycomponent/>,document.getElementById('app'));

**14.什么是Props？**<br>
Props是React中属性的简写。它是只读组件，必须保持纯净，即不可变。它总是在整个应用中从父组件传递到子组件。子组件永远不可能将prop送回父组件。这有助于维护单向数据流，通常用于呈现动态生成的数据。

**15.React中的状态是什么？它是如何使用的？**<br>
状态是React的核心，是数据的来源，必须尽可能简单。基本状态是确定组件呈现和行为的对象。与props不同，它是可变的，用于创建动态和交互式组件。可以通过**this.state()**访问。

**16.区分状态和props**<br>
(1)从父组件中接收初始值 state - yes ; props - yes<br>
(2)父组件可以改变值 state - no ; props - yes <br>
(3)在组件中设置默认值 state - yes ; props - yes <br>
(4)在组件内部变化 state - yes ; props - no <br>
(5)设置子组件的初始值 state - yes ; props -yes <br>
(6)在子组件的内部更改 state - no ; propos - yes <br>

**17.如何更新组件的状态？**<br>
可以用**this.setState()**更新组件的状态
	
	class MyComponent extends React.Component{
	  constructor(){
		super();
		this.state = {name:'jerry',id:'01'}
		},
	 render(){
		setTimeout(()=>{this.setState({name:'chane',id:'22'})},2000)
		return (
				<div>
					<h1>{this.state.name} + {this.state.id}</h1>
				</div>	
			 )
		}
	}
	ReactDOM.render(<MyComponent/>,document.getElementById('app'));

**18.React中的箭头函数是什么？有什么用？**<br>
箭头函数是用于编写函数表达式的简短语法。这些函数允许正确绑定组件的上下文，因为在ES6中默认情况下不能自动绑定。使用高阶函数时，箭头函数非常有用。

	// General Way
	render(){return (<MyInput onChange = { this.handleChange.bind(this) } />); }
	// With Arrow Funtion
	render(){return (<MyInput onChange = { (e)=>this.handleChange(e) } />); }

**19.区分有状态和无状态组件**<br>
(1）有状态组件：内存中存储有关组件状态变化的信息；有权改变状态；包含过去、现在和未来可能的状态变化情况；接收无状态组件状态变化要求的通知，然后将props发送给他们。<br>
(2)无状态组件：计算组件的内部状态；无关改变状态；不包含过去、现在和未来可能发生的状态变化情况；从有状态组件接收props并视其为回调函数。

**20.React组件生命周期的阶段是什么？**<br>
React组件的生命周期有三个不同的阶段：<br>
(1)初始渲染阶段： 组件即将开始并进入DOM加载阶段；<br>
(2)更新阶段：一旦组件被添加到DOM，它只有在prop或状态发生改变时才能更新和重新渲染。<br>
(3)卸载阶段：组件生命周期的最后阶段，组件被销毁并从DOM中删除。

**21.详细解释React组件的生命周期方法**<br>
(1)componentWillMount() 渲染之前执行，在客户端和服务器端都会执行；<br>
(2)componentDidMount() 仅在第一次渲染后，在客户端执行；<br>
(3)componentWillReceiveProps() 当从父类接收到props并且在调用另一个渲染器之前执行；<br>
(4)shouldComponentUpdate() 返回true更新组件，默认返回false；<br>
(5)componentWillUpdate() 在DOM中进行渲染之前调用；<br>
(6)componentDidUpdate() 在渲染发生后立即调用；<br>
(7)componentWillUnmount() 从DOM卸载组件后调用，用于清理内存空间。

**22.React中的事件是什么？**<br>
在React中，事件是对鼠标悬停、鼠标单击、按键等特定操作的触发反应。处理这些事件类似于处理DOM元素中的事件。但是有一些语法差异，如：<br>
(1)用驼峰命名法对事件命名而不是仅适用小写字母；（2）事件作为函数而不是作为字符串传递；

**23.如何在React中创建一个事件？**<br>
	
	class Display extends React.Component{
		show(event){//code},
		render(){
			return (<div onClick={this.show.bind(this)}>Click Me!</div>)
		}
	}

**24.React中的合成事件是什么？**<br>
合成事件是围绕浏览器原生事件充当跨浏览器的对象。它将不同浏览器的行为合并为一个API，这样就确保了事件在不同浏览器中显示一致的属性。

**25.React的Refs是什么？**<br>
Refs是React中引用的简写。它是一个有助于存储特定的React元素或组件的引用的属性，它将由组件渲染配置函数返回。用于对render()返回的特定元素或组件的引用。例如：<br>

	class ReferenceDemo extends React.Component{
		display(){
			const name = this.inputDemo.value;
			document.getElementById('disp').innerHTML = name;
		},
		render(){
			return (
				<div>
					Name: <input type="text" ref={input => this.inputDemo = input} />
					<button name="Click" onClick={this.display}>Click</button>
					<h2>hello <span id="disp"></span></h2>
				</div>
			);
		}
	}

**26.列出一些应该使用Refs的情况**<br>
（1）需要管理焦点、选择文本或媒体播放时（2）触发式动画（3）与第三方DOM库集成

**27.如何模块化React中的代码？**<br>
可以使用export和import属性来模块化代码。它们有助于在不同的文件中单独编写组件。<br>

	//ChildComponent.js
	export default class ChildComponent extends React.Component{
		render(){
			return(
				<div>
					<h1>this is a child component</h1>
				</div>
			);
		}
	}
	//ParentComponent.js
	import ChildComponent from './childcomponent.js';
	class ParentComponent extends React.Component{
		render(){
			return (<div><ChildComponent/></div>);
		}
	}

**28.如何在React中创建表单？**