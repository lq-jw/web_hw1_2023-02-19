import styles from "./descriptions.module.css"
import { TitleDes } from "../Titles";
import {Row , Col} from "antd"

function descriptions(){
    return(
        <article className={styles.layout}>
            <Row className="container" justify="center">
                <TitleDes/>
                <Col span={24} className={styles.section}>
                    <p className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum corrupti ut iure aliquam. Quod, perferendis. Libero tempore iste, animi sint numquam illum quasi laboriosam unde pariatur quidem! Suscipit consequatur nihil dolor impedit temporibus ad cum, voluptatum odit ratione ullam eligendi amet beatae aliquid eaque nesciunt optio nobis ducimus itaque. Voluptatibus aspernatur assumenda quod quo error consequuntur, vero iusto reprehenderit repellat maiores, sapiente dolores voluptates minima. Alias dolore assumenda fuga quae repellat voluptatum quo, saepe exercitationem perspiciatis reiciendis modi tempora. Recusandae explicabo iusto corporis nam numquam dignissimos, necessitatibus, iure non culpa repellat repudiandae temporibus! Saepe excepturi tempore iusto eos sit!
                    </p>
                </Col>
            </Row>
        </article>
    );
}

export default descriptions;