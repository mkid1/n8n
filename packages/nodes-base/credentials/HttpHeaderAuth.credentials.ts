import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';


export class HttpHeaderAuth implements ICredentialType {
	name = 'httpHeaderAuth';
	displayName = 'Header Auth';
	documentationUrl = 'httpRequest';
	properties: INodeProperties[] = [
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',

		},
		{
			displayName: 'Value',
			name: 'value',
			type: 'string',
			default: '',
		},
	];
}
