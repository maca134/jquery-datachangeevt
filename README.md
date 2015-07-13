# jquery-datachangeevt
Simple jquery plugin to trigger 'dataChanged' event when a data attribute is changed

## Example
```javascript
$('#element2').on('dataChange', function (e, field, data) {
	console.log('data changed', e, field, data);
});
```