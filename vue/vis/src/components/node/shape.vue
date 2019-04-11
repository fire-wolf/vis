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
					{id: 1,  label: 'circle',  shape: 'circle' },
			        {id: 2,  label: 'ellipse', shape: 'ellipse'},
			        {id: 3,  label: 'database',shape: 'database'},
			        {id: 4,  label: 'box',     shape: 'box'    },
			        {id: 5,  label: 'diamond', shape: 'diamond'},
			        {id: 6,  label: 'dot',     shape: 'dot'},
			        {id: 7,  label: 'square',  shape: 'square'},
			        {id: 8,  label: 'triangle',shape: 'triangle'},
			        {id: 9,  label: 'triangleDown', shape: 'triangleDown'},
			        {id: 10, label: 'text',    shape: 'text'},
			        {id: 11, label: 'star',    shape: 'star'},
			        {id: 21, font:{size:30},          label: 'big circle',  shape: 'circle' },
			        {id: 22, font:{size:30},          label: 'big ellipse', shape: 'ellipse'},
			        {id: 23, font:{size:30},          label: 'ellipse with a long label text', shape: 'ellipse'},
			        {id: 24, font:{size:30},          label: 'big database',shape: 'database'},
			        {id: 25, font:{size:30},          label: 'big box',     shape: 'box'    },
			        {id: 26, font:{size:30}, size:40, label: 'big diamond', shape: 'diamond'},
			        {id: 27, font:{size:30}, size:40, label: 'big dot',     shape: 'dot'},
			        {id: 28, font:{size:30}, size:40, label: 'big square',  shape: 'square'},
			        {id: 29, font:{size:30}, size:40, label: 'big triangle',shape: 'triangle'},
			        {id: 30, font:{size:30}, size:40, label: 'big triangleDown', shape: 'triangleDown'},
			        {id: 31, font:{size:30},          label: 'big text',    shape: 'text'},
			        {id: 32, font:{size:30}, size:40, label: 'big star',    shape: 'star'}
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