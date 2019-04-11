<template>
	<div class="html">
		<p>如何使用SVG图像在节点中显示自定义HTML。<br/>警告：当前并非所有浏览器都支持此功能。</p>
		<div ref="visualization" id='netWork'></div>
		 
	</div>
</template>
<script> 
	import { Network,DataSet} from 'vis';
	import { mountVisData } from '@/assets/js/utils/visData';
	export default{
		components:{
			Network
		},
		data(){
			return{  
				visData:{
					nodes:null,
					edges:null
				},
				options:{
					physics: {stabilization: false},
                	edges: {smooth: false}
				}
			}
		},
		mounted(){
			 const container = this.$refs.visualization;
			 let svg = '<svg xmlns="http://www.w3.org/2000/svg" width="390" height="65">' +
            '<rect x="0" y="0" width="100%" height="100%" fill="#7890A7" stroke-width="20" stroke="#ffffff" ></rect>' +
            '<foreignObject x="15" y="10" width="100%" height="100%">' +
            '<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:40px">' +
            ' <em>I</em> am' +
            '<span style="color:white; text-shadow:0 0 20px #000000;">' +
            ' HTML in SVG!</span>' +
            '</div>' +
            '</foreignObject>' +
            '</svg>';


          	let url = "data:image/svg+xml;charset=utf-8,"+ encodeURIComponent(svg);
          	let nodes = [];
          	let edges =  [];
          	 nodes.push({id: 1, label: 'Get HTML', image: url, shape: 'image'});
            nodes.push({id: 2, label: 'Using SVG', image: url, shape: 'image'});
            edges.push({from: 1, to: 2, length: 300});

		    this.visData.nodes = nodes;
		    this.visData.edges = edges ;
		    new Network(container, this.visData, this.options);

		}
	}
</script>
<style scoped lang='scss'>

</style>