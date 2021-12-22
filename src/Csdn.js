import { useState } from 'react';
import { Input, Select, Button, Form, Alert, message } from 'antd';
import { SmileTwoTone } from "@ant-design/icons";
import { httpPost } from './http';
import "./App.css";

const { Option } = Select;

const Csdn = () => {
	const [school, setSchool] = useState('@stu.pku.edu.cn');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');

	const submit = () => {
		const url = '/open-stulife-sdk/api/submit';
		httpPost(url, { address: address, email: email + school }).then((response) => {
			return response.json();
		}).then((data) => {
			const { msg } = data;
			message.success(msg);
		}).catch(function (err) {
			alert(err);
		});
	}

	const onFinish = (values) => {
		if (email.indexOf('.edu.cn') !== -1 || email.indexOf('.com') !== -1) {
			message.error('请不要输入邮箱后缀，邮箱后缀在右侧下拉框内选择即可！');
		} else {
			submit();
		}
	}

	const selectAfter = (
		<Select defaultValue={school} className="select-after" onChange={(e) => { setSchool(e) }}>
			<Option value="@stu.pku.edu.cn">@stu.pku.edu.cn</Option>
			<Option value="@pku.edu.cn">@pku.edu.cn</Option>
			<Option value="@thu.edu.cn">@thu.edu.cn</Option>
			<Option value="@ruc.edu.cn">@ruc.edu.cn</Option>
			<Option value="@ecnu.edu.cn">@stu.ecnu.edu.cn</Option>
		</Select>
	);

	return (
		<div className='csdn'>
			<Form
				name="basic"
				initialValues={{ remember: true }}
				onFinish={onFinish}
				autoComplete="off"
			>
				<Form.Item
					label="邮箱地址"
					name="email"
					rules={[
						{ required: true, message: '请输入您的学校邮箱前缀（学校邮箱后缀请在下拉框选择，仅限北大、清华、人大、华东师范...）' }
					]}
				>
					<Input addonAfter={selectAfter} placeholder='请输入您的学校邮箱前缀（学校邮箱后缀请在下拉框选择，仅限北大、清华、人大、华东师范...）' onChange={(e) => {
						setEmail(e.target.value);
					}} />
				</Form.Item>
				<Form.Item
					label="csdn地址"
					name="csdn"
					rules={[{ required: true, message: '请输入您要下载的csdn文件地址！' }]}
				>
					<Input placeholder='请输入您要下载的csdn文件地址' onChange={(e) => {
						setAddress(e.target.value);
					}} />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						<SmileTwoTone />
						提交
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}

export default Csdn;