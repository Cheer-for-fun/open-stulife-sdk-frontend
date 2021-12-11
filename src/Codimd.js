import { Steps, Tooltip, Button } from "antd";
import { SmileTwoTone} from "@ant-design/icons";
import "./App.css";

const { Step } = Steps;

const Codimd = () => {
	const handleClick = () => {
		const w=window.open('_black');
		const url='http://39.103.166.167:3000/';
		w.location.href=url;
	}

	const UserSteps = () => {
		return (
			<Steps current={0} className='codimd-steps'>
				<Step title="填写信息" />
				<Step title="点击注册" description="注册按钮默认为灰色（待改）" />
				<Step title="完成注册" />
			</Steps>);
	}

	return (
		<div className='codimd'>
			<UserSteps />
			<Tooltip placement="topLeft" title="请注意注册按钮默认就为灰色的（待改），填好信息后点击注册即可完成注册。" arrowPointAtCenter>
				<Button onClick={handleClick} className='codimd-btn'><SmileTwoTone />点击体验 / codimd(轻量级的在线文档协作工具)。</Button>
			</Tooltip>
		</div>
	)
};

export default Codimd;