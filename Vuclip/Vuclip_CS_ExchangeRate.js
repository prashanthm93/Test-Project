/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define([['N/record','N/currentRecord','N/currency']],

function(currentRecord,currency,record) {
 
    function postSourcing(scriptContext) {
    	var currentRecord = scriptContext.currentRecord;
    	var FieldName = scriptContext.fieldId;
    	
    	if(FieldName === 'entity'){
    		var custId = currentRecord.getValue('entity');
    		var subsidiaryId = currentRecord.getValue('subsidiary');
    		//log.debug("custId", custId);
    		
    		if(subsidiaryId == 3){
    			var subsidiaryId = currentRecord.getValue('subsidiary');
        		var currency = currentRecord.getValue('currency');
        		var date = currentRecord.getValue('trandate');
        		var rate = currency.exchangeRate({
        		    source: currency,
        		    target: 'SGD',
        		    date: date
        		});
        		
    			currentRecord.setValue({
        		    fieldId: 'custbody_exchange_rate_sgd',
        		    value: rate
        		});
    		}
    	}
    }

   
    return {
        //fieldChanged: fieldChanged,
        postSourcing: postSourcing
       
    };
    
});
