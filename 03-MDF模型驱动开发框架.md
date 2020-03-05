#### 查询方案扩展

##### 1.命名规则

在excel中[pb_meta_filters]表中 behaviorObject 字段定义当前查询区扩展文件的路径，如果 excel 中无此列字段可手动添加, 默认规范：‘领域编码’ + ‘单据编码’ + ‘固定扩展字符’ ( filterVM.Extend.js) ，如 EMM_emm_inspectstd_list_filterVM.Extend.js

注意： 查询区扩展脚本定义需加上子产品编码文件夹路径，如：EMM/EMM_emm_inspectstd_list_filterVM.Extend.js

##### 2.加载流程和逻辑

```js
proxy.getInitFilterInfo(params,function(errors,result) {
	......
	if(data && data.behaviorObject && !extendInit) {
		......
		cb.require([data.behaviorObject],function(extend) {
			extend.doAction('init',viewModel);
			self.extendReady1 (viewModel,results,solutionId,viewId);
		}, funciton (error) {
			console.log(erro);
			self.extendReady1 (viewModel,results,solutionId,viewId);
		})
	}
	......
})；

```

##### 3.使用方式

查询区扩展脚本的使用方式和单据扩展一致。

```js
	cb.define([],funtion(common) {
		var emm_emm_inspectstd_list_filterVM_Extend = {
			doAction:function(name,viewmodel) {
				if(this[name]) {
					this[name](viewmodel);
				}
			},
			init:function(viewmodel) {
				common.initOrgFilter(viewmodel,'pk_org');
				common.initCardFilter(viewmodel,'pk_org','pcstdlkvos_pk_equip');
			}
		};
		try {
			module.exports = emm_emm_inspectstd_list_filterVM_Extend;
		} catch(error) {
		
		};
		return emm_emm_inspectstd_list_filterVM_Extend;
	});
```

##### 4.典型场景

点击查询区搜索按钮是，在请求之前修改请求参数，实现根据具体的参数请求数据。

```js
	cb.define([],function() {
		var PC_pc_productlist_filterVM_Extend = {
			doAction:function(name,viewmodel){
				if(this[name]) {
					this[name])(viewmodel);
				}
			},
			init:function(viewmodel) {
				// 点击查询区搜索按钮前，将字段参数传入
				viewmodel.on('beforeSearch',function(args) {
					// 设置具体的查询条件
					var conditon = {
						"isExtend":true,
                        simpleVOs:[]
					};
					// 字段 stopstatus 等于0的数据进行查询
					conditon.simpleVOs.push ({
						field:'stopstatus',
						op:'eq',
						value1:0
					});
					this.setFilter(condition);
				});
			}
		};
		try {
			module.exports = PC_pc_productlist_filterVM_Extend;
		} catch (error) {console.log(error)};
		return PC_pc_productlist_filterVM_Extend;
	});
```

args 为请求参数内容； commonVOs: 需过滤配置了对应的过滤项； simpleVOs: 根据自己的后台元数据描述

#### 加载流程和逻辑说明

##### 1.Node 端扩展脚本路径拼接

Node 端拿到 Java 传过来的标准协议后，做了如下转换，新增了三个字段到客户端：

```js
// viewmeta.vmName = viewmeta.cSubId + '_' + viewmeta.cBillNum + '_' + "VM";
viewmeta.vmName = _getVmName(viewmeta);

// viewmeta.extendFileName = viewmeta.vmName + '.Extend.js';
viewmeta.extendFileName = _getExtendVmFildName(viewmeta,extendName);

// viewmeta.extendVmName = viewmeta.vmName + '_Extend';
viewmeta.extendVmName = _getExtendVmName(viewmeta,extendName);

......
const _getVmName = (obj) => {
	if(!obj) return;
	return obj.cSubId + '_' + obj.cBillNum +'_'  + 'VM';
}
```

| 字段说明             | 字段名称       | 值                         |
| -------------------- | -------------- | -------------------------- |
| 模板扩展脚本文件名称 | extendFileName | AA_aa_orgtree_VM.Extend.js |
| 模板扩展的vm名称     | extendVmName   | AA_aa_orgtree_VM_Extend    |
| 模板vm名称           | vmName         | A_aa_orgtree_VM            |

##### 2.Node 端自动生成的页面模型中加载扩展脚本

```js
......
model.prototype.initData = function () {
	......
	// 如：RM/RM_rm_retailvouch_VM_billing.Extend.js
	var extendFile = '<%=subId%> / <%=extendFileName%>';
	cb.require([extendFile],function() {
		......
	},function(error) {
		......
	});
};
......
```

##### 3.使用方式

在扩展脚本中，可以获取页面控制层面的 model,调用相关 model 的 API 实现具体的特定的交互。

```js
	cb.define(['common/common_VM.Extend.js'],function(common) {
		var SB_billNolist_VM_Extend = {
			doAction:function(name,viewmodel) {
				if(this[name]) {
					this[name](viewmodel);
				}
			},
			init:function(viewmodel) {
				......
			}
		};
		try {
			module.exports = SB_billNolist_VM_Extend;
		} catch(error) {
			......
		};
		return SB_billNolist_VM_Extend;
	})
```
一般会把通用的业务逻辑进行抽取放到 common 中，在business 中建立一个 common文件夹，里面放入一些公共逻辑。其他各业务节点可以先将公共脚本载入进行依赖。

#### FreeView 扩展

当通用的页面模板满足不了需求时，框架提供了 FreeView 的扩展。多端协议里面的 UIMeta 负责 UI 模板渲染，业务逻辑都需要用户在单据扩展脚本中实现。

##### 1. 核心思想

(1) MDD 框架负责 UI 模板渲染，业务数据请求加载交给开发者；

(2) 在扩展文件中使用 api 实现业务数据加载；

(3) 如果是列表，通过列表的 GridModel 的 setDataSource 来加载数据；

(4) UIMeta 负责将页面渲染出来；

(5) 使用 extend.js 调用平台 API 来做数据加载；

(6) viewmodel 自动将数据更新到 React 组件；

##### 2. 示例代码

```js
cb.define(['common/common_VM.extend.js'], function(common) {
  var PU_pu_pursettlemanualmenu_VM_Extend = {
    doAction: function(name, viewmodel) {
      if (this. [name]) {
        this[name](viewmodel);
      }
    },
    init: function(viewmodel) {
      // console.log('abc');
      var bFilter = false;
      viewmodel.on('filterClick', function(data) {
        if (bFilter) {
          viewmodel.get('pu_pursettlemanualmenu_rd').setDataSource({ url: '/bill/list', method: 'POST' }, { billnum: 'pu_pursettlemanualmenu_rd', condition: data.condition });

          viewmodel.get('pu_pursettlemanualmenu_fp').setDataSource({ url: '/bill/list', method: 'POST' }, { billnum: 'pu_pursettlemanualmenu_fp', condition: data.condition });
        } else {
          bFilter = true;
        }
      });

      viewmodel.on("settle", function(args) {
        var datard = viewmodel.get('pu_pursettlemanualmenu_rd').setSelectedRows();
        var datafp = viewmodel.get('pu_pursettlemanualmenu_fp').setSelectedRows();
        var data = { rd: datard, fp: datafp };

        var callback = viewmodel.getParams().callback;
        callback(data);
        viewmodel.communication({ type: 'return' });
      })
    }
  };
  try {
    module.exports = PU_pu_pursettlemanualmenu_VM_Extend;
  } catch (error) {
    console.log(error);
  };
  return PU_pu_pursettlemanualmenu_VM_Extend;
});
```








































