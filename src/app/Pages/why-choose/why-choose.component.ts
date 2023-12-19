import { AfterViewInit, Component } from '@angular/core';
declare var $: any; // jQuery'yi kullanacaksanız bu import'u ekleyin

@Component({
  selector: 'app-why-choose',
  templateUrl: './why-choose.component.html',
  styleUrls: ['./why-choose.component.css']
})
export class WhyChooseComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Arrow fonksiyon kullanarak
    $('.odometer').each(() => {
      var count = $(this).data('count');
      $(this).html(count);
    });
  }
}
