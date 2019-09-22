### 第1章 React新的前端思维方式 ###
#### 1.1 初始化一个React项目 ####
#### 1.1.1 create-react-app工具 ####
安装命令：`npm install --global create-react-app`<br>
执行命令：`create-react-app first_react_app`<br>
运行命令：`npm start`<br>
#### 1.2 增加一个新的React组件 ####
React的首要思想是通过组件(Component)来开发应用。所谓组件，指的是能够完成某个特定功能的独立的，可重用的代码。React非常适合构建用户交互组件。如下增加一个CouterClick组件：

		import React,{ Component } from 'react';
		class ClickCounter extends Component {
			constructor(props){
			super(props);
			this.onClickButton = this.onClickButton.bind(this);
			this.state = {count:0};
			}
			onClickButton(){
			this.setState({count:this.state.count + 1});
			}
			render(){
			return (
			<div>
			<button onClick={this.onClickButton}>Click Me</button>
			<div>
			Click Count:{this.state.count}
			</div>
			</div>
			)
			}
		}
		export default ClickCounter;
#### 1.2.1 JSX ####
JSX是JavaScript的语法扩展(eXtension),在JSX中使用的"元素"不限于HTML中的元素，可以是任何一个React组件。React判断一个元素是HTML还是React组件的原则就是看**第一个字母是否大写**。<br>
在JSX中可以通过**onClick方式**给一个元素添加一个事件处理函数。
#### 1.2.2 JSX是进步还是退步 ####
JSX的onClick事件处理方式与HTML的onclick的区别？<br>
- onclick添加的事件处理函数是在全局环境下执行的，污染了全局环境；<br>
- 给很多DOM元素添加onclick事件，可能会影响网页性能；<br>
- 对于使用onclick的DOM元素，如果要动态地从DOM树中删掉的话，需要将对应的事件注销，否则可能造成内存泄漏。<br>
而在JSX中不存在这些问题<br>
- 首先，onClick挂载的每个函数，都可以控制在组件范围内，不会污染全局空间；<br>
- JSX中onClick使用了事件委托(event delegation)的方式处理点击事件，将所有事件都挂在最顶层的DOM节点上；<br>
- React控制了组件的声明周期，在unmount的时候自然能够清除相关的所有事件处理函数，内存也不存在泄漏；<br>
#### 1.3 分解React应用 ####
启动React命令：`npm start`  创建生产环境优化代码：`npm build`<br>
babel会把ES6语法的JavaScript代码转译(transpile)成浏览器普遍支持的JavaScript代码。
#### 1.4 React的工作方式 ####
#### 1.4.1jQuery如何工作 ####
	<div>
        <button id="clickMe">Click Me</button>
        <div>Click Count:<span id="clickCount">0</span></div>
    </div>
    <script src="http://lib.sinaapp.com/js/jquery/1.9.1/jquery-1.9.1.min.js"></script>
    <script>
        $(function(){
            $('#clickMe').click(function(){
                var clickCounter = $('#clickCount');
                var count = parseInt(clickCounter.text(),10);
                clickCounter.text(count+1); 
            })
        })
    </script>
	
在jQuery的解决方案中，首先根据CSS规则找到id为clickCount的按钮，挂上一个匿名事件处理函数，在事件处理函数中，选中那个需要被修改的DOM元素，读取其中的文本值，加以修改，然后修改这个DOM元素。<br>
对于庞大的项目，这种模式会造成代码结构复杂，难以维护。<br>
#### 1.4.2 React理念 ####
React的工作方式把开发者从繁琐的操作中解放出来，开发者只需要着重“我想要显示什么”，而非“怎样去做”。整个React应用要做的就是渲染，关注的是渲染成什么样子，而不用关心如何实现增量渲染。React的理念，归结为一个公式：***UI = render(data)***<br>
用户看到的界面(UI)，应该是一个函数(render)的执行结果，直接数据(data)作为参数。这个函数是一个**纯函数**，所谓纯函数，指的是没有任何副作用，输出完全依赖于输入的函数，两次函数调用如果输入相同，得到的结果也绝对相同。<br>
React实践的是“响应式编程”（Reactive Programming）的思想，这也是React为什么叫做React的原因。
#### 1.4.3 Vitual DOM ####
React利用Vitual DOM，让每次渲染都只重新渲染最少的DOM元素。<br>
**什么是Vitual DOM?**<br>
DOM树是HTML的抽象，而Vitual DOM就是对DOM树的抽象。Vitual DOM不会触及浏览器的部分，只是存在于JavaScript空间的树形结构，每次自上而下渲染React组件时，会对比这一次产生的Vitual DOM和上一次渲染的Vitula DOM的差别，然后修改真正的DOM树时只需修改差别中的部分就行。
#### 1.4.4 React工作方式的有点 ####
React利用**函数式编程**的思想来解决用户界面渲染的问题，强制所有组件都按照**数据驱动渲染**的模式来工作，最大的优势使开发者的效率会大大提高，开发出来的代码的可维护性和可阅读性也大大增强，让程序出于可控范围内。<br>
### 第2章：设计高质量的React组件 ###
作为一个合格的开发者，不要只满足于编写了可以运行的代码，要了解代码背后的工作原理；不要只满足于自己编写的程序能够运行，还要让自己的代码可读且易于维护。
#### 2.1易于维护组件的设计要素 ####
就和一个人最好一次只专注做一件事一样，也应该尽量保持一个组件只做一件事。作为软件设计的通则，组件的划分要满足**高内聚(High Cohesion)**和**低耦合(Low Coupling)**的原则。<br>
**高内聚**指的是把逻辑紧密相关的内容放在一个组件中。React天生具有高内聚的特点：展示内容的JSX、定义行为的JavaScript，甚至定义样式的CSS，都可以放在一个JavaScript文件中，因为它们本来就是为了实现一个目的而存在的。<br>
**低耦合**指的是不同组件之间的依赖关系要尽量弱化，也就是每个组件要尽量独立。
#### 2.2 React组件的数据 ####
> 差劲的程序员操心代码，优秀的程序员操心数据结构和它们之间的关系。—— Linux Torvalds,Linux创始人 
	 
React组件的数据分为两种，prop和state，无论prop或state改变，都可能引发组件的重新渲染。prop是组件的对外接口，state是组件的内部状态，对外用prop，内部用state。
#### 2.2.1 React的prop ####
在React中，prop是从外部传递给组件的数据，一个React通过定义自己能够接受的prop就定义了自己的对外公共接口。<br>
**1.给prop赋值**<br>
	
	<SampleButton id='sample' borderWidth={2} onClick={onButtonClick} style={{color:'red'}}></SampleButton>
上面的id、borderWidth、onClick、style都是组件SampleButton的prop,React组件的prop支持的类型很丰富，除了字符串，可以使数字类型，函数类型和对象。<br>
当外部世界要传递一些数据给React组件，一个最直接的方式就是通过prop;同样，React组件要反馈数据给外部世界，也可以用prop。让父组件交给子组件一个回调函数，子组件在恰当的时间调用该回调函数，可以带上必要的参数，这样反过来就把信息传递给外部世界了。<br>
对于Counter组件，父组件ControlPanel就是外部世界，ControlPanel用prop传递信息给Counter的代码如下：<br>

	class ControlPanel extend Component {
	render(){
		return (
			<div>
				<Counter caption="First" initvalue={0}>
				<Counter caption="Second" initvalue={10}>
				<Counter caption="Third" initvalue={20}>
			</div>
		);
		}
	}
在每个Counter实例中都使用了caption和initValue两个prop，父组件ControlPanel将值传递个子组件Counter。<br>
**2.读取prop值**<br>
Counter内部是如何接收传入的prop的，首先是构造函数，代码如下：<br>
	
	class Counter extends Component{
    constructor(props){
        super(props);

        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = {count:props.initValue || 0} }
	}
在构造函数中可以通过参数props获得传入prop值，在其他函数中则可以通过this.props访问传入的值，例如在Counter的render函数中通过this.props获得传入的caption,代码如下：
	
	render(){
    const {caption} = this.props;//解构赋值(destructing assignment)
    return (
        <div>
			<button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
			<button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
			<span>{caption} count:{this.state.count}</span>
        </div>
        );
	}
**3.propTypes检查**<br>
用来规范prop对外接口，包括**该组件支持哪些prop**和**每个prop应该是什么格式**<br>
可以增加类propTypes属性来定义prop规格，这不只是声明，而且是一种限制，在运行时和静态代码检查时，都可以根据propTypes判断外部世界是否正确使用了组件的属性。<br>
不过在React15.5以后的版本中，都不再直接支持propTypes属性，需要先安装第三方包prop-types：
    `npm install prop-types`<br>
然后就可以增加propTypes类，代码如下：

	Counter.propTypes = {
		caption:PropTypes.string.isRequired,//caption必须是string
		initValue:PropTypes.number //initValue必须是number
	}
propTypes检查只是一个辅助开发的工具，并不会改变组件的行为，适合在开发过程中避免犯错，在产品环境中应尽量避免使用。
**2.2.2 React的state**
驱动组件渲染过程的除了prop，还有state,stat代表组建的内部状态。由于React组件不能修改传入的prop，所以需要记录自身数据的变化，就要使用state。<br>
**1.初始化state**<br>
通常在组件类的构造函数结尾处初始化state,通过this.state的赋值完成对组件的初始化，代码如下：<br>
	
	constructor(){
		...
		this.state = {count:props.initValue || 0}
	}
由于在PropTypes声明中并没用isRequired要求必须有值的prop，需要在代码中判断所给的prop值是否存在，如果不存在，就给一个默认的初始值。此外，推荐使用React的**defaultProps**功能，可以设置默认值，让代码更加容易读懂。<br>
给Counter组件添加defaultProps的代码如下: 

	Counter.defaultProps = {initValue:0};
有了这样的设定，构造函数中的this.state初始化可以省去判断条件，代码可以简写为：

	constructor(){
		...
		this.state = {count:props.initValue}
	}
**2.读取和更新state**<br>
通过给button添加onClick属性挂载点击事件处理函数，并在事件处理函数内部使用**this.setState函数**改变组件的state(切忌直接修改state，会报错,原因是没有驱动组件进行重新渲染)。<br>
this.setState()的作用是：**先改变this.state的值，然后驱动组件重新渲染**。
#### 2.2.3 prop和state的对比 ####
总结一下prop和state的区别：<br>
1.prop用于定义外部接口，state用于记录内部状态；<br>
2.prop的赋值在外部世界使用组件时，state的赋值在组件内部；<br>
3.组件不应该改变prop的值，而state存在的目的就是让组件来改变的；<br>
React组件扮演的就是render函数的角色(**UI=render(data)**)，应该是一个没有副作用的纯函数。修改props的值，是一个副作用，组件应该避免。
### 2.3组件的生命周期 ###
React严格定义了组件的生命周期，生命周期可能会经历如下三个过程：<br>
- 装载过程(Mount),也就是组件第一次在DOM树中渲染的过程；<br>
- 更新过程(Update),当组件重新渲染的过程；<br>
- 卸载过程(Unmount),组件从DOM中删除的过程<br>
三种不同的过程，React依次会调用组件的一些成员函数，这些函数称为生命周期函数。
#### 2.3.1 装载过程 ####
当组件第一次被渲染的时候，依次调用的函数如下：<br>
**1.constructor;2.getInitialState;3.getDefaultProps;4.componentWillMount;5.render; 6.componentDidMount**<br>
**1.constructor**<br>
注意，并不是每个组件都需要定义自己的构造函数，例如**无状态的React组件**。一个React组件需要构造函数，往往是为了以下目的：<br>
(1)**初始化state** （2）**绑定成员函数的this环境**
通过bind绑定的函数被调用时，this始终指向当前组件实例。在某些教程中会看到另一种bind函数的方式，使用两个冒号的::操作符(bind操作符)，类似下面的语句：<br>

	this.foo = ::this.foo; 等同于 this.foo = this.foo.bind(this);
**2.getInitailState和getDefaultProps**<br>
getInitialState函数的返回值会用来初始化组件的this.state,但这个方法只有用React.createClass()方法创造的组件类才会发生作用；<br>
getDefaultProps函数的返回值可以作为props的初始值，同样只有用React.createClass()方法(Facebook官方已逐渐弃用)创造的组件类才可以使用。代码如下:<br>

	const Sample = React.createClass({
		getInitailState:function(){return {foo:'bar'};}，
		getDefaultProps:function(){return {sampleProp:0};}
	});
用ES6的话，在构造函数中给通过this.state赋值完成状态的初始化，通过给**类属性(注意是类属性，而不是类的实例对象属性)defaultProps**赋值指定props初始值，达到完全一样的效果。代码如下：

	class Sample extends React.Component{
		constructor(props){
			super(props);
			this.state = {foo:'bar'};
		}
		Sample.defaultProps = {sampleProp:0}
	}
注意：getInitailState只出现在装载过程中，在一个组件的生命周期过程中，该函数只被调用一次，所以不要在里面放置预期会被执行多次的代码。<br>
**3.render**<br>
render函数无疑是React中最重要的函数，组件要渲染，必须依靠render,但render并不做实际的渲染动作，它只返回一个JSX描述的结构，最终由React来操作渲染过程。<br>
某些特殊的组件不是渲染界面或某些情况下选择没有东西可化，此时render函数返回一个null或false，告诉组件这次不需要渲染任何DOM元素。<br>
注意：**render函数应该是一个纯函数，完全依据this.state和this.props来决定返回的结果，而且不要产生任何副作用。在render函数中去调用this.setState()毫无疑问是错误的，因为一个纯函数不应该引起状态的变化**。

**4.componentWillMount和componentDidMount**<br>
在装载过程中，componentWillMount会在调用render函数前被调用，componentDidMount会在调用render函数之后调用，这两个函数就像render函数的前哨和后卫，一前一后，把render函数夹住，正好分别做render前后要做的工作。<br>
componentWillMount表示"将要装载"，此时没有任何渲染出来的结果，即使调用this.setState修改状态也不会引发重新绘制，在componentWillMount中做的事情，都可以提前到constructor中间去做。<br>
render函数调用完之后，componentDidMount函数并不会立刻被调用，componentDidMount被调用的时候，
render函数返回的东西已经引发了渲染，组件已经被"装载"到了DOM树上。<br>
componentWillMount既可以在服务器端被调用，也可以在浏览器端被调用；componentDidMount只能在浏览器端调用，在服务器端使用React的时候不会被调用。<br>
在componentDidMount被调用的时候，组件已经被装载到DOM树上，可以放心的获取渲染出来的任何DOM。

#### 2.3.2 更新过程 ####
当组件被装载到DOM树上之后，若要为用户提供更多的交互体验，随着用户操作改变而展现内容，props或state此时被修改，就会引发组件的更新过程。更新过程依次经历以下生命周期函数(并不是所有的更新过程都要执行全部函数。)：<br>
**1.componentWillReceiveProps 2.shouldComponentUpdate 3.componentWillUpdate 4.render 5.componentDidUpdate**<br>

**1.componentWillReceiveProps(nextProps)**
父组件的render函数被调用，在render函数里面被渲染的子组件就会经历更新过程，不管父组件传给子组件的props有没有改变，都会触发子组件的componentWillReceiveProps函数。<br>
注意，通过this.setState方法触发的更新过程不会调用这个函数，这是因为这个函数适合**根据新的props值**(**也就是nextProps**)来计算出是不是要更新内部状态state。更新组件内部状态的方法就是this.setState,如果this.setState的调用导致componentWillReceiveProps再调用一次，那就是个死循环。<br>
forceUpdate()函数的作用是强行引发重新绘制。nextProps代表的是这一次渲染传入的props值，this.props代表的上一次渲染时的props值，只有两者有变化的时候才有必要调用this.setState更新内部状态。

**2.shouldComponentUpdate(nextProps,nextState)**<br>
除了render函数，shouldComponentUpdate可能是React组件生命周期中最重要的一个函数了。说render函数重要，是因为render决定了该渲染什么，而说shouldComponentUpdate函数重要，是因为它**决定了一个组件什么时候不需要渲染**。<br>
render函数的返回结构将用于构造DOM对象，而shouldComponentUpdate函数返回一个布尔值，返回true,继续更新过程，接下来调用render函数；false，就停止更新，也不会引发后续渲染。<br>
说shouldComponentUpdate重要，是因为该函数可以发现没有必要渲染的情况下，不去渲染，从而提高React渲染的性能。<br>
shouldComponentProps函数的参数是接下来的props和state值，根据这两个参数，外加this.props和this.state来判断出是返回ture还是false。<br>

**3.componentWillUpdate和componentDidUpdate**
如果组件的shouldComponentUpdate函数返回true,React接下来就会依次调用对应组件的componentWillUpdate、render和componentDidUpdate函数。

#### 2.3.3 卸载过程 ####
React组件的卸载过程只涉及一个函数componentWillUnMount，当组件要从DO树上删除之前，该函数被调用。
### 2.4 组件向外传递数据 ###
**问题：希望ControlPanel能够即时显示出这三个子组件当前计数值之和**<br>
**思路：**解决这个问题的方法，依然要用到prop,将函数作为prop的值从父组件传递给子组件，又可以被子组件作为函数调用。

2.4.1 应用实例

