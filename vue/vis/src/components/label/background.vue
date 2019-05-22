<template>
	<div class="arrows">
		<p>标签可以有任何颜色背景。</p> 		
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
			   {id: 1, label: 'Node 1', font: {background: 'red'}},
    {id: 2, label: 'Node 2', font: {background: 'white'}},
    {id: 3, label: 'Node 3', font: {background: 'cyan'}},
    {id: 4, label: 'Node 4', font: {background: 'lime'}},
    {id: 5, label: 'Node 5', font: {background: 'pink'}}
				],
				edges:[
					{from: 1, to: 2, label: 'label1', font: {background: '#ff0000'}},
    {from: 1, to: 3, label: 'label2', font: {background: 'yellow'}},
    {from: 2, to: 4, label: 'label3', font: {background: 'lime'}},
    {from: 2, to: 5, label: 'label3', font: {background: 'pink'}}
				],
				visData:{
					nodes:null,
					edges:null
				},
				options:{
					 nodes:{
				      font:{strokeWidth:0}
				    },
				    edges:{
				      font:{strokeWidth:0}
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