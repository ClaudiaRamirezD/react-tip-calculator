import BillInput from "./BillInput";
import TipSelect from "./TipSelect";
import PeopleInput from "./PeopleInput";

export default function InputsSection(props) {
  return (
    <section className="flex flex-col gap-10 text-main md:w-1/2">
      <h2 className="sr-only">User Inputs</h2>
      <BillInput bill={props.bill} setBill={props.setBill} />
      <TipSelect
        tip={props.tip}
        setTip={props.setTip}
        customTip={props.customTip}
        setCustomTip={props.setCustomTip}
      />
      <PeopleInput
        people={props.people}
        setPeople={props.setPeople}
        error={props.error}
        setError={props.setError}
      />
    </section>
  );
}
