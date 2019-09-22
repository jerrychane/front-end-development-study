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

## 二、React Component ##
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
**28.如何在React中创建表单？**<br>
React表单类似于HTML表单，但在React中，状态包含在组件的state属性中，并且只能通过setState()更新。因此元素不能直接更新它们的状态，它们的提交是由JavaScript函数处理的。此函数可以完全访问用户输入到表单的数据。

	handleSubmit(event){
		alert("A name was submitted:"+this.state.value);
		event.preventDefault();
	}
	render(){
		return （
			<form>
				<label>Name:<input type="text" value={this.state.value} onChange={this.handleSubmit} /></label>
				<input type="submit" value="Submit" />
			</form>
			）
	}
**29.对受控组件和非受控组件的理解**<br>
(1)受控组件：没有维持自己的状态；数据由父组件控制；通过props获取当前值，然后通过回调通知更改；<br>
(2)非受控组件：保持着自己的状态，数据由DOM控制，Refs用于获取当前值。

**30.什么是高阶组件（HOC）？**<br>
HOC是Higher Order Component的缩写，高阶组件是重用组件逻辑的高级方法，是一种源于React的组件模式。HOC是自定义组件，在它之内包含另一个组件。它们可以接受子组件提供的任何动态，但不会修改或复制其组件中的任何行为。HOC是“纯(pure)”组件。

**31.用HOC可以做什么？**<br>
HOC可用于多任务，如：代码重用，逻辑和引导抽象；渲染劫持；状态抽象和控制；Props控制

**32.什么是纯组件？**<br>
纯组件是可以编写的最简单、最快的组件。它们可以替换任何只有render()的组件，这些组件增强了代码的简单性和应用的性能。

**33.React中key的作用是什么？**<br>
key用于识别唯一的Vitual DOM元素及其驱动UI的相应数据。它们通过回收DOM中当前所有的元素来帮助React优化渲染。这些key必须是唯一的数字或字符串，React只是重新排序元素而不是重新渲染它们。这可以提高应用程序的性能。

## 三、React Redux ##
**34.MVC框架的主要问题是什么？**<br>
对DOM操作的代价非常高；程序运行缓慢且效率低下；内存浪费严重；由于循环依赖性，组件模型需要围绕modes和view进行创建。

**35.解释一下Flux**<br>
Flux是一种强制单向数据流的架构模式。它通过控制派生数据，并使用具有所有数据权限的中心store实现多个组件的通信。整个应用中的数据更新必须只能在此进行。Flux为应用提供稳定性并减少运行时的错误。

**36.什么是Redux？**<br>
Redux是当今最热门的前端开发库之一。它是JavaScript程序的可预测状态容器，用于整个应用的状态管理。使用Redux开发的应用易于测试，可以在不同环境中运行，并显示一致的行为。

**37.Redux遵循的三个原则是什么？**<br>
（1）**单一事件来源**：整个应用的状态存储在单个store中的对象/状态树里。单一状态树可以更容易地跟踪，并调试或检查应用程序；<br>
（2）**状态是只读的**：改变状态的唯一方法就是去触发一个动作。动作是描述变化的普通JS对象。就像state是数据的最小表示一样，该操作是对数据更改的最小表示；<br>
（3）**使用纯函数进行修改**：需要用纯函数来指定状态树如何通过操作进行转换。纯函数就是返回值仅取决于其参数值的函数。

**38.对“单一事件来源”的理解**<br>
Redux使用"Store"将程序的整个状态存储在一个地方，所有组件的状态都存储在Store中，并从Store本身接收更新。单一状态树可以更容易地跟踪变化，并调试或检查程序。

**39.列出Redux的组件**<br>
Action : 一个用来描述发生了什么事情的对象；<br>
Reducer:这是一个确定状态将如何变化的地方；<br>
Store:保存整个程序的状态树；<br>
View:只显示Store提供的数据；

**40.数据如何通过Redux流动？**<br>
Redux由三部分组成，即store,reduce以及action,直观一点，可以把store理解为数据库，reducer是事件处理函数，action是触发事件。整个Redux的大致逻辑是这样的：<br>
第一步：dispath(action),即触发action；（事件发生）<br>
第二步：reducer当前所触发的action执行相应的函数，更新state；（执行事件处理函数，更新数据库数据）<br>
第三步：store的state会为应用所获取，就像数据库一样。<br>
Redux内部数据流的实现是：dispatch的action会被reducer捕获到，其实是action先被传送至store，再由store交付给reducer的，因为dispatch是store的方法，action通过回调到达的store，而之前在创建store的时候，使用了这样的声明`var store = createStore(reducer)`，使得store和reducer建立了某种联系，自然的，reducer能够接收到触发的action。<br>
Redux与应用之间的数据流：一般由应用的视图触发action,然后redux的reducer根据接收到的action执行相应的处理函数更新store的state，而state又作为数据源与应用绑定在一起，所以store的state一更新，应用视图也会同步刷新。

**41.如何在Redux中定义Action?**<br>
React中的Action必须具有type属性，该属性表示正在执行的action的类型。必须将它们定义为字符串常量，并且还可以向其添加更多的属性。在Redux中，action被名为Actinon Creators的函数所创建。以下是Action和Action Creator的示例：<br>

	function addTodo(text){return {type:ADD_TODO,text}}
**42.解释Reducer的作用**<br>
Reducer是纯函数，它规定应用程序的状态怎样因响应action而改变。Reducer先通过接受先前的状态和action来工作，然后它返回一个新的状态。它根据操作的类型确定需要执行哪种更新，然后返回新的值。如果不需要完成任务，它会返回原来的状态。

**43.Store在Redux中的意义**<br>
Store是一个JavaScript对象，它可以保存程序的状态，并提供一些方法来访问状态、调度操作和注册监听器。应用程序的整个状态/对象树保存在单一存储中。因此，Redux非常简单且是可预测的。我们可以将中间件传递到store来处理数据，并记录改变存储状态的各种操作。所有操作都通过reducer返回一个新状态。

**44.Redux与Flux有何不同？**<br>
Flux:store包含状态和更改逻辑；有多个store;所有store都互不影响且是平级的；有单一调度器；React组件订阅store;<br>
Redux:store和更改逻辑是分开的；只有一个store;带有分层reducer的单一store;没有调度器的概念；容器组件是有联系的。

**45.Redux有哪些优点？**<br>
**结果可预测性：**由于总是存在一个真实来源，即store，因此不存在如何将当前状态与动作和应用的其他部分同步的问题；<br>
**可维护性：**代码变得更容易维护，具有可预测的结果和严格的结构；<br>
**服务器端渲染：**只需将服务器上创建的store传到客户端即可，这对初始渲染非常有用，并且可以优化应用性能，从而提供更好的用户体验；<br>
**开发人员更便利**：从操作到状态更改，开发人员可以实时跟踪应用中发生的所有事情；<br>
**易于测试：**小巧、纯粹和独立的代码功能，使得代码可以测试且更独立；<br>

## 四、React Router ##
**46.什么是React路由？**<br>
React路由是一个构建在React之上的强大的路由库，有助于向应用程序中添加新的视图，使URL与网页上显示的数据保持同步。它负责维护标准化的结构和行为，并用于开发单页面Web应用。

**47.为什么React Router v4中使用switch关键字？**<br>
虽然<div>用于封装Router中的多个路由，但当你想要仅显示在多个定义的路线中呈现单个路线时，可以使用"**switch**"关键字。使用时，<switch>标记会按顺序将已定义的URL与已定义的路由进行匹配。找到第一个匹配项后，它将渲染指定的路径，从而绕过其他路线。
	
	<switch>
		<route exact path='/' component={Home} />
		<route path='/posts/:id' component={NewPost} />
		<route path='/posts/' component={Post} />
	</switch>

**48.为什么需要React中的路由？**<br>
Router用于定义多个路由，当用户定义特定的URL时，如果此URL与Router内定义的任何“路由”的路径匹配，则用户将重定向到该特定路由。所以我们需要在自己的应用中添加一个Router库，允许创建多个路由，每个路由都会向我们提供一个独特的视图。

**49.列出React Router的有点。**<br>
a.可以将Router视为单个根组件（<BrowerRouter）,其中将特定的子路由（<route>）包裹起来；<br>
b.无需手动设置历史值，在React Router v4中，要做的就是讲路由包装在<BrowserRouter>组件中；
c.三个分开的包，分别用于Web、Native和Core,使我们的应用更加紧凑。

**50.React Router与常规路由有何不同？**<br>
常规路由：每个试图对应一个新文件；HTTP请求被发送到服务器并且接收相应的HTML页面；用户实际在每个视图的不同页面切换；<br>
React路由：只涉及单个HTML页面；仅更改历史记录属性；用户认为自己正在不同的页面间切换。