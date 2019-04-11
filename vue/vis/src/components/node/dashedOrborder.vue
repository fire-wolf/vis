<template>
	<div class="basics">
		<p>节点可以有各种形状。请注意，包含文本的节点和文本类型的大小是由字体大小决定的，而不是由节点大小决定的。</p>
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
					 {id: 1, font:{size:30},          label: 'circle',  shape: 'circle' , shapeProperties:{borderDashes:[5,5]}},
			        {id: 2, font:{size:30},          label: 'ellipse', shape: 'ellipse', shapeProperties:{borderDashes:[5,5]}},
			        {id: 3, font:{size:30},          label: 'database',shape: 'database', shapeProperties:{borderDashes:[5,5]}},
			        {id: 4, font:{size:30},          label: 'box',     shape: 'box'    , shapeProperties:{borderDashes:[5,5]}},
			        {id: 5, font:{size:30}, size:40, label: 'diamond', shape: 'diamond', shapeProperties:{borderDashes:[5,5]}},
			        {id: 6, font:{size:30}, size:40, label: 'dot',     shape: 'dot', shapeProperties:{borderDashes:[5,5]}},
			        {id: 7, font:{size:30}, size:40, label: 'square',  shape: 'square', shapeProperties:{borderDashes:[5,5]}},
			        {id: 8, font:{size:30}, size:40, label: 'triangle',shape: 'triangle', shapeProperties:{borderDashes:[5,5]}},
			        {id: 9, font:{size:30}, size:40, label: 'triangleDown', shape: 'triangleDown', shapeProperties:{borderDashes:[5,5]}},
			        {id: 10, font:{size:30}, size:40, label: 'star',    shape: 'star', shapeProperties:{borderDashes:true}},
			        {id: 11, font:{size:30}, size:40, label: 'circularImage', shape: 'circularImage', image: '../img/indonesia/4.png', shapeProperties: {borderDashes:[15,5]}},
				],
				edges:[
					{from: 1, to: 3},
				    {from: 1, to: 2},
				    {from: 2, to: 4},
				    {from: 2, to: 5},
				    {from: 3, to: 3}
				],
				visData:{
					nodes:null,
					edges:null
				},
				options:{physics:{barnesHut:{gravitationalConstant:-4000}}}
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