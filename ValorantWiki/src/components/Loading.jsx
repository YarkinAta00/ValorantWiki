import {Spin} from 'antd'

const Loading = () => {
  return (
    <Spin
    tip="Loading"
    size="large"
    className="flex justify-center items-center h-screen"
>
    <div className="content flex justify-center items-center h-screen"></div>
</Spin>
  )
}

export default Loading