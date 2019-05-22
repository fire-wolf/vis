<template>
	<div class="margin">
		<p>在网络的“节点”属性中设置边界值将其设置为默认值。</p>
		<p>将值设置为数字将使用该数字作为页边距。如果该值是一个对象，将为每个边距设置不同的值。</p>
		<p>请注意，负值会适当地将标签推到节点之外。</p>		
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
			 { id: 1, label: 'Default Value\n(5)', x: -150, y: -150 },
    { id: 2, label: 'Single Value\n(25)', margin: 20, x: 0, y: 0 },
    { id: 3, label: 'Different Values\n(10, 20, 40, 30)', margin: { top: 10, right: 20, bottom: 40, left: 30 }, x: 120, y: 120},
    { id: 4, label: 'A Negative Value\n(10, 20, 40, -50)', margin: { top: 10, right: 20, bottom: 30, left: -20 }, x: 300, y: -300}
				],
				edges:[
					  {from: 1, to: 2},
    {from: 2, to: 3},
    {from: 3, to: 4}
				],
				visData:{
					nodes:null,
					edges:null
				},
				options:{
					 nodes: {
				      shape: 'box'
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