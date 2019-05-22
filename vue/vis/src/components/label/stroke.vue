<template>
	<div class="stroke">
		<p>标签的笔画完全可以有宽度和颜色。默认情况下，为了清晰起见，EdgeLabel有一个白色的笔画。</p>		
		<div ref="visualization" id='netWork'></div> 
	</div>
</template>
<script> 
	import { Network } from 'vis';
	import { mountVisData } from '@/assets/js/utils/visData';
	export default{
		 
		data(){
			return{ 
				nodes:[
			{id: 1, label: 'Node 1', font: {strokeWidth: 3, strokeColor: 'white'}},
    {id: 2, label: 'Node 2'},
    {id: 3, label: 'Node 3'},
    {id: 4, label: 'Node 4'},
    {id: 5, label: 'Node 5'}
				],
				edges:[
				{from: 1, to: 2, label: 'edgeLabel', font: {strokeWidth: 2, strokeColor : '#00ff00'}},
    {from: 1, to: 3, label: 'edgeLabel'},
    {from: 2, to: 4},
    {from: 2, to: 5}
				],
				visData:{
					nodes:null,
					edges:null
				},
				options:{
					nodes : {
				      shape: 'dot',
				      size: 10
				    }
				},
				htmlMsg:""
			}
		},
		mounted(){
			var _this = this;
			 const container = this.$refs.visualization;
		    this.visData.nodes = mountVisData(this, 'nodes');
		    this.visData.edges = mountVisData(this, 'edges');
		    var network = new Network(container, this.visData, this.options);
		    

		}
	}
</script>
<style scoped lang='scss'>

</style>