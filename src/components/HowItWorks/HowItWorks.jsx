import styles from "./HowItWorks.module.css";
import HowItWorksHeader from "./HowItWorksHeader";
import HowItWorksSteps from "./HowItWorksSteps";

export default function HowItWorks(){
    return(
        <section className={styles.container}>
            <div>
                <HowItWorksHeader/>
                <HowItWorksSteps/>
            </div>
        </section>
    )
}