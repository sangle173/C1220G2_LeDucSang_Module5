import {Employee} from './employee';
import {Customer} from './customer';
import {Service} from './service';

export interface Contract {
  employee?: Employee;
  customer?: Customer;
  service?: Service;
  dateStarted?: string;
  dateEnd?: string;
  downPayment?: number;
  totalPayment?: number;
}
