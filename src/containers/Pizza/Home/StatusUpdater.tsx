import React, { ChangeEvent, Component } from 'react';
import { Pizza, pizzaStatuses } from '../../../data/mock';

interface StatusUpdaterProps {
  item: Pizza;
  onUpdate: Function;
  handleChange: Function;
}

class StatusUpdater extends Component<StatusUpdaterProps, any>{
  constructor(props: StatusUpdaterProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }
  onChange(e: ChangeEvent<HTMLSelectElement>): void{
    const { handleChange, onUpdate, item } = this.props;
    const status = e.target.value;
    handleChange({ ...item, status });
    onUpdate(status);
  }
  onBlur(e: ChangeEvent<HTMLSelectElement>): void{
    e.preventDefault();
    const { onUpdate, item } = this.props;
    onUpdate(item.status);
  }

  render(): React.ReactNode {
    const { item } = this.props;
    return <select className="form-control-sm" value={item.status} onBlur={this.onBlur}  onChange={this.onChange}>
      {pizzaStatuses.map(status => <option value={status} key={status}>{status}</option>)}
    </select>;
  }
}

export default StatusUpdater;
