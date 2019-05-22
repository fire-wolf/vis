<template>
	<div class="arrows">
		<p>标签颜色及大小。</p> 		
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
			   {id: 1, label: 'Node 1', font: '12px arial red'},
    {id: 2, label: 'Node 2', font: {size:12, color:'lime', face:'arial'}},
    {id: 3, label: 'Node 3', font: '18px verdana blue'},
    {id: 4, label: 'Node 4', font: {size:12, color:'red', face:'sans', background:'white'}},
    {id: 5, label: 'Node 5', font: {size:15, color:'red', face:'courier', strokeWidth:3, strokeColor:'#ffffff'}}
				],
				edges:[
					{from: 1, to: 2},
    {from: 1, to: 3},
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
				}
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