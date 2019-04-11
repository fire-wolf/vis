<template>
	<div class="circleimg">
		<p>
 节点显示图片
</p>
		<div ref="visualization" id='netWork'></div>
	</div>
</template>
<script >
import { Network } from 'vis';
import { mountVisData } from '@/assets/js/utils/visData';
export default{
	components:{
		Network
	},
	data(){
		return{ 
			nodes:[],
			edges:[],
			visData:{
				nodes:null,
				edges:null
			},
			options:{} 
		}
	},
	mounted(){
		 const container = this.$refs.visualization;
		  let nodes = [];

      // Create a data table with links.
      let edges = [];
      let DIR = '/static/image/';
      let EDGE_LENGTH_MAIN = 150;
      let EDGE_LENGTH_SUB = 50;

      nodes.push({id: 1, label: 'Main', image: DIR + 'Network-Pipe-icon.png', shape: 'image'});
      nodes.push({id: 2, label: 'Office', image: DIR + 'Network-Pipe-icon.png', shape: 'image'});
      nodes.push({id: 3, label: 'Wireless', image: DIR + 'Network-Pipe-icon.png', shape: 'image'});
      edges.push({from: 1, to: 2, length: EDGE_LENGTH_MAIN});
      edges.push({from: 1, to: 3, length: EDGE_LENGTH_MAIN});

      for (var i = 4; i <= 7; i++) {
        nodes.push({id: i, label: 'Computer', image: DIR + 'Hardware-My-Computer-3-icon.png', shape: 'image'});
        edges.push({from: 2, to: i, length: EDGE_LENGTH_SUB});
      }

      nodes.push({id: 101, label: 'Printer', image: DIR + 'Hardware-Printer-Blue-icon.png', shape: 'image'});
      edges.push({from: 2, to: 101, length: EDGE_LENGTH_SUB});

      nodes.push({id: 102, label: 'Laptop', image: DIR + 'Hardware-Laptop-1-icon.png', shape: 'image'});
      edges.push({from: 3, to: 102, length: EDGE_LENGTH_SUB});

      nodes.push({id: 103, label: 'network drive', image: DIR + 'Network-Drive-icon.png', shape: 'image'});
      edges.push({from: 1, to: 103, length: EDGE_LENGTH_SUB});

      nodes.push({id: 104, label: 'Internet', image: DIR + 'System-Firewall-2-icon.png', shape: 'image'});
      edges.push({from: 1, to: 104, length: EDGE_LENGTH_SUB});

      for (var i = 200; i <= 201; i++ ) {
        nodes.push({id: i, label: 'Smartphone', image: DIR + 'Hardware-My-PDA-02-icon.png', shape: 'image'});
        edges.push({from: 3, to: i, length: EDGE_LENGTH_SUB});
      }
	    this.visData.nodes = nodes;
	    this.visData.edges = edges;
	    new Network(container, this.visData, this.options);

	} 
}
</script>
<style>
</style>