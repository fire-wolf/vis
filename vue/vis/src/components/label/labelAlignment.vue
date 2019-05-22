<template>
	<div class="arrows">
		<p>边缘标签可以以各种方式与边缘对齐。</p>
		<p>节点标签中的文本对齐方式可以是“左”或“中”，其他字体对齐方式未实现。</p>
		<p>节点（顶部、底部、左侧、右侧、内部）的标签对齐（标签“框”的放置）已计划，但尚未在VIS中进行。</p>
		<p>将捕获并显示单击事件，以说明单击标签的工作方式。可以将节点彼此拖动以查看这如何影响单击事件值。
		</p>
		 
		
		<div ref="visualization" id='netWork'></div>
		 <pre id="eventSpan" ref="eventSpan">{{htmlMsg}}</pre>
	</div>
</template>
<script> 
	import { Network } from 'vis';
	import { mountVisData } from '@/assets/js/utils/visData';
	export default{
		 
		data(){
			return{ 
				nodes:[
			   	{id: 1, label: 'Node 1'},
				    {id: 2, label: 'Node 2'},
				    {id: 3, label: 'Node 3:\nLeft-Aligned', font: {'face': 'Monospace', align: 'left'}},
				    {id: 4, label: 'Node 4'},
				    {id: 5, label: 'Node 5\nLeft-Aligned box', shape: 'box',font: {'face': 'Monospace', align: 'left'}}
				],
				edges:[
					{from: 1, to: 2, label: 'middle',     font: {align: 'middle'}},
				    {from: 1, to: 3, label: 'top',        font: {align: 'top'}},
				    {from: 2, to: 4, label: 'horizontal', font: {align: 'horizontal'}},
				    {from: 2, to: 5, label: 'bottom',     font: {align: 'bottom'}}
				],
				visData:{
					nodes:null,
					edges:null
				},
				options:{},
				htmlMsg:""
			}
		},
		mounted(){
			var _this = this;
			 const container = this.$refs.visualization;
		    this.visData.nodes = mountVisData(this, 'nodes');
		    this.visData.edges = mountVisData(this, 'edges');
		    var network = new Network(container, this.visData, this.options);
		    network.on("click", function (params) {
		        params.event = "[original event]";
		        _this.htmlMsg = '<h2>Click event:</h2>' + JSON.stringify(params, null, 4);
		    });

		}
	}
</script>
<style scoped lang='scss'>

</style>