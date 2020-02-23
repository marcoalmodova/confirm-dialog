# Salesforce Confirmation Dialog

A Confirmation Dialog Lightning Web Component.

##How to use it

Just push the LWC metadata to your org and you can use it like the below example:

```html
<c-confirmation-dialog title='Confirmation Title'
                           message='Do you want to proceed?'
                           confirm-label='Yes'
                           cancel-label='No'
                           visible={isDialogVisible}
                           original-message={originalMessage}
                           name="confirmModal"
                           onclick={handleClick}>
```

You can also check the parentComponent LWC that is a live example of how to use the dialog.