import {LoggerService} from '../core/logger.service.';
import {DataService} from '../core/data.service';


export  function  dataServiceFactory(logger: LoggerService) {
  const dataService: DataService = new DataService(logger);
  logger.log('Creating a new data Service with a factory function');
  return dataService;
}
