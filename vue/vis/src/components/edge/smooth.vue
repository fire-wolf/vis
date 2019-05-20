<template>
	<div class="smooth">
		<h2>光滑曲线</h2>
<p> 
到目前为止，示例中的所有平滑曲线都使用了动态平滑曲线。这意味着每条曲线都有一个支持节点，参与物理模拟。对于大型网络或密集集群，这可能不是理想的解决方案。为了解决这个问题，添加了静态平滑曲线。静态平滑曲线仅基于连接节点的位置。有多种方法可以确定此曲线的绘制方式。此示例显示不同类型的效果。</p>
<p>拖动该节点以查看如何为每个设置绘制平滑曲线。对于动画系统，我们只推荐连续模式。在下一个示例中，您可以看到这些方法对大型网络的影响。记住曲线的方向（从和到）很重要。</p>
<p>选择动态类型时，可以看到与固定节点和边缘的交互，任何其他类型都不会与其他节点交互。</p>
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
			 		{id: 1, label: 'Fixed node', x:0, y:0, fixed:true},
				    {id: 2, label: 'Drag me', x:150, y:130, physics:false},
				    {id: 3, label: 'Obstacle', x:80, y:-80, fixed:true, mass:10}
				],
				edges:[
					{from: 1, to: 2, arrows:'to'}
				],
				visData:{
					nodes:null,
					edges:null
				},
				options:{
					 physics:true,
				    configure:function (option, path) {
				      if (path.indexOf('smooth') !== -1 || option === 'smooth') {
				        return true;
				      }
				      return false;
				    },
				    edges: {
				      smooth: {
				        type: 'continuous'
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