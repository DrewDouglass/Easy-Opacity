Basic Usage:
$("#elementId").easyOpacity();

More examples, see index.html file in the final download for full usage examples.

<script type="text/javascript">
	$(function(){
		$('#demo01').easyOpacity({
			opacity : 0.5,
			hoverOpacity : 1,
			pointer : true,
			duration : 1000
		});
		$('#demo02').easyOpacity({
			opacity: 0.2,
			hoverOpacity: 1,
			pointer: true,
			duration: 5000,
			onMouseOverCallback: demoCallback
		});
		$('#demo03').easyOpacity({
			opacity: 0.5,
			hoverOpacity: 1,
			duration: 0,
			onMouseOverCallback: addShadow,
			onMouseOutCallback: removeShadow
		});
		
		function demoCallback(){
			alert('Demo Callback.');
		}
		
		function removeShadow(){
			$('#demo03').removeClass('shadow');
		}
		
		function addShadow(){
			$('#demo03').addClass('shadow');
		}
	});
	</script>