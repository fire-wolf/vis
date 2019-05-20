<template>
	<div class="arrows">
		<p> 端点类型为： 'arrow' 'circle' 'bar'.默认： 'arrow'</p>
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
			  {id: 1, label: 'A'},
    {id: 2, label: 'B'},
    {id: 3, label: 'C'},
    {id: 4, label: 'D'}
				],
				edges:[
					{from: 1, to: 2, arrows:'to'},
				    {from: 2, to: 3, arrows:{
				      to: {
				        enabled: true,
				        type: 'circle'
				      }
				    }},
				    {from: 3, to: 4, arrows:{
				      to: {
				        enabled: true,
				        type: 'bar'
				      }
				    }}
				],
				visData:{
					nodes:null,
					edges:null
				},
				options:{
					// 启用此选项可使端点变小/变大
				    edges: {
				      arrows: {
				        to: {
				          scaleFactor: 5
				        }
				      }
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