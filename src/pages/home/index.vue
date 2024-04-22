<template>
	<view class="main">
		<view class="flex-1">
			<view class="card">
				<text>Base64 编解码</text>
			</view>
		</view>
		<bottomBar></bottomBar>
	</view>
</template>

<script>
import jumpButton from "../../components/jumpButton.vue";
import bottomBar from "./bottomBar.vue";

export default {
	components: {
		jumpButton,
		bottomBar,
	},
};
</script>
