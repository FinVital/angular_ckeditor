
import { Component, OnInit } from '@angular/core';

import { CKEditor4 } from '../../ckeditor/ckeditor';

@Component( {
	selector: 'app-simple-usage',
	templateUrl: './simple-usage.component.html',
	styleUrls: [ './simple-usage.component.scss' ]
} )
export class SimpleUsageComponent implements OnInit{
	public isReadOnly = false;
	public editorData: any =
		`<p>Getting used to an entirely different culture can be challenging.
While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person.
You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>`;

	editors = [ 'Classic' ];

	isHidden = false;

	isRemoved = false;

	public componentEvents: string[] = [];

	ckeConfig: any;

	ngOnInit() {
	}

	ckEditorConfig: any = { 
		allowedContent: true,
        height: 500,
        width: '100%',
		removePlugins : 'elementspath',
		resize_enabled : false,
		toolbar: [
		['Templates', 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat'],
	  [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ],
	  [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ],
	  [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl' ],
	  [ 'Link', 'Unlink', 'Anchor' ],
	  [ 'Image', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe' ],
	  [ 'Styles', 'Format', 'Font', 'FontSize' ],
	  [ 'TextColor', 'BGColor' ],
	  [ 'Maximize', 'ShowBlocks' ]
		] };	

	toggleDisableEditors() {
		this.isReadOnly = !this.isReadOnly;
	}

	onReady( editor: CKEditor4.EventInfo, editorName: string ): void {
		console.log( `${editorName} editor is ready.` );
	}

	onChange( event: CKEditor4.EventInfo, editorName: string ): void {
		console.log( `${editorName} editor model changed.` );
	}

	onFocus( event: CKEditor4.EventInfo, editorName: string ): void {
		console.log( `Focused ${editorName.toLowerCase()} editing view.` );
	}

	onBlur( event: CKEditor4.EventInfo, editorName: string ): void {
		console.log( `Blurred ${editorName.toLowerCase()} editing view.` );
	}

	onPaste( event: CKEditor4.EventInfo, editorName: string ): void {
		console.log( `Pasted into ${editorName.toLowerCase()} editing view.` );
	}

	onAfterPaste( event: CKEditor4.EventInfo, editorName: string ): void {
		console.log( `After pasted fired in ${editorName.toLowerCase()} editing view.` );
	}

	onDragStart( event: CKEditor4.EventInfo, editorName: string ): void {
		console.log( `Drag started in ${editorName.toLowerCase()} editing view.` );
	}

	onDragEnd( event: CKEditor4.EventInfo, editorName: string ): void {
		console.log( `Drag ended in ${editorName.toLowerCase()} editing view.` );
	}

	onDrop( event: CKEditor4.EventInfo, editorName: string ): void {
		console.log( `Dropped in ${editorName.toLowerCase()} editing view.` );
	}

	onFileUploadRequest( event: CKEditor4.EventInfo, editorName: string ): void {
		console.log( `File upload requested in ${editorName.toLowerCase()} editor.` );
	}

	onFileUploadResponse( event: CKEditor4.EventInfo, editorName: string ): void {
		console.log( `File upload responded in ${editorName.toLowerCase()} editor.` );
	}

	onNamespaceLoaded( event: CKEditor4.EventInfo, editorName: string ): void {
		console.log( `Namespace loaded by ${editorName.toLowerCase()} editor.` );
	}

	submit(){
	   alert(this.editorData);	
	}
}
