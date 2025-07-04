import Button from '@/components/Button';
import PassengerDetails from '../components/PassengerDetails';

import type {
  GeneralTripInfoType,
  PassengerDetailsType,
  CurrentBusInfoType,
} from '@/type';

const Form3 = (props: {
  generalTripInfo: GeneralTripInfoType;
  passengerDetails: PassengerDetailsType[];
  currentBusInfo: CurrentBusInfoType;
  OnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleBackButton: () => void;
  handleNextButton: () => void;
}) => {
  return (
    <form onSubmit={props.OnSubmit} className="flex flex-col gap-4">
      <h2 className="text-primary text-center text-2xl font-bold">
        Review Trip Info
      </h2>

      <PassengerDetails
        generalTripInfo={props.generalTripInfo}
        passengerDetails={props.passengerDetails}
        currentBusInfo={props.currentBusInfo}
      />

      <div className="flex items-center justify-between gap-4">
        <Button
          variant="outline"
          className="mt-4 w-full p-3"
          type="button"
          onClick={props.handleBackButton}
        >
          Back
        </Button>
        <Button variant="solid" className="mt-4 w-full p-3" type="submit">
          Submit
        </Button>
      </div>
      <p className="text-muted text-center text-xs md:text-sm">
        Payment will be available after submitting.
      </p>
    </form>
  );
};

export default Form3;
