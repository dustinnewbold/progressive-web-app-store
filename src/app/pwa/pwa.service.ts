import { Injectable } from '@angular/core';
import { PWA } from './pwa.model';

@Injectable()
export class PWAService {
	private apps: PWA[] = [
		{
			name: 'test',
			url: 'https://mobile.twitter.com',
			screenshots: []
		},
	];

	constructor() { }

}
