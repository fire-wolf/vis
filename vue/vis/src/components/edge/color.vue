<template>
	<div class="arrows">
		<p>颜色有很多选择。可以手动定义颜色或从节点继承颜色。可以将不透明度设置为覆盖颜色给定的任何不透明度。为了使用不透明度，节点和边缘都需要十六进制或RGB颜色！</p>
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
			   		{id: 1, label: 'node\none', shape: 'box', color:'#97C2FC'},
				    {id: 2, label: 'node\ntwo', shape: 'circle', color:'#FFFF00'},
				    {id: 3, label: 'node\nthree', shape: 'diamond', color:'#FB7E81'},
				    {id: 4, label: 'node\nfour', shape: 'dot', size: 10, color:'#7BE141'},
				    {id: 5, label: 'node\nfive', shape: 'ellipse', color:'#6E6EFD'},
				    {id: 6, label: 'node\nsix', shape: 'star', color:'#C2FABC'},
				    {id: 7, label: 'node\nseven', shape: 'triangle', color:'#FFA807'},
				    {id: 8, label: 'node\neight', shape: 'triangleDown', color:'#6E6EFD'}
				],
				edges:[
					 {from: 1, to: 8, color:{color:'red'}},
				    {from: 1, to: 3, color:'rgb(20,24,200)'},
				    {from: 1, to: 2, color:{color:'rgba(30,30,30,0.2)', highlight:'blue'}},
				    {from: 2, to: 4, color:{inherit:'to'}},
				    {from: 2, to: 5, color:{inherit:'from'}},
				    {from: 5, to: 6, color:{inherit:'both'}},
				    {from: 6, to: 7, color:{color:'#ff0000', opacity:0.3}},
				    {from: 6, to: 8, color:{opacity:0.3}}
				],
				visData:{
					nodes:null,
					edges:null
				},
				options:{
					 nodes: {
				      shape: 'circle'
				    }
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