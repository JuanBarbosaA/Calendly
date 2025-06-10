import MoreThanSchedulingHeader from "./MoreThanSchedulingHeader";
import MoreThanSchedulingSteps from "./MoreThanSchedulingSteps";
import styles from "./MoreThanSchedulingSection.module.css";

export default function MoreThanSchedulingSection() {
    return(
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <MoreThanSchedulingHeader/>
                <MoreThanSchedulingSteps/>
            </div>
        </section>
    )
};
