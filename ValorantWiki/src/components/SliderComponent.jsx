import { Carousel } from "antd";
import Image from 'antd/lib/image';
const SliderComponent = () => {
 
 
  return (
    <div style={{
      display: 'block', width: 700, padding: 30
    }}>
    <Carousel autoplay>
    <div>
    <Image width={700} src="src/assets/1322753.jpeg" />
    </div>
    <div>
    <Image width={700} src="src/assets/3037903.webp" />
    </div>
    <div>
    <Image width={700} src="src/assets/download.jpeg" />
    </div>
  </Carousel>
  </div>

  )
}

export default SliderComponent;