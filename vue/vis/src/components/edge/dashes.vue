<template>
	<div class="arrows">
		<p> 使用dashes</p>
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
			   	{id: 1, label: 'Node 1'},
				    {id: 2, label: 'Node 2'},
				    {id: 3, label: 'Node 3'},
				    {id: 4, label: 'Node 4'},
				    {id: 5, label: 'Node 5'},
				    {id: 6, label: 'Node 6'}
				],
				edges:[
					 {from: 1, to: 3, dashes:true},
				    {from: 1, to: 2, dashes:[5,5]},
				    {from: 2, to: 4, dashes:[5,5,3,3]},
				    {from: 2, to: 5, dashes:[2,2,10,10]},
				    {from: 2, to: 6, dashes:false},
				],
				visData:{
					nodes:null,
					edges:null
				},
				options:{
					 
				}
			}
		},
		mounted(){
			 const container = this.$refs.visualization;
		    this.visData.nodes = mountVisData(this, 'nodes');
		    this.visData.edges = mountVisData(this, 'edges');
		    new Network(container, this.visData, this.options);

		}
	}
</script>
<style scoped lang='scss'>

</style>