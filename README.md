# tabs
Example of Tabs with Automatic Activation

## Demo
* https://hans2103.github.io/tabs/

## Features
* Powered by JS
* Styling by CSS

## Use

```html
<div class="tabs">
	<div role="tablist" aria-label="Entertainment">
		  <button role="tab" aria-selected="true" aria-controls="nils-tab" id="nils">Nils Frahm</button>
		  <button role="tab" aria-selected="false" aria-controls="agnes-tab" id="agnes" tabindex="-1">Agnes Obel</button>
		  <button role="tab" aria-selected="false" aria-controls="complexcomplex" id="complex" tabindex="-1" data-deletable>Joke</button>
	</div>
	
	<div tabindex="0" role="tabpanel" id="nils-tab" aria-labelledby="nils">
	  	<p>Nils Frahm is a German musician, composer and record producer based in Berlin. He is known for combining classical and electronic music and for an unconventional approach to the piano in which he mixes a grand piano, upright piano, Roland Juno-60, Rhodes piano, drum machine, and Moog Taurus.</p>
	</div>
	
	<div tabindex="0" role="tabpanel" id="agnes-tab" aria-labelledby="agnes" hidden>
	  	<p>Agnes Caroline Thaarup Obel is a Danish singer/songwriter. Her first album, Philharmonics, was released by PIAS Recordings on 4 October 2010 in Europe. Philharmonics was certified gold in June 2011 by the Belgian Entertainment Association (BEA) for sales of 10,000 Copies.</p>
	</div>
	
	<div tabindex="0" role="tabpanel" id="complexcomplex" aria-labelledby="complex" hidden>
		  <p>Fear of complicated buildings:</p>
		  <p>A complex complex complex.</p>
	</div>
</div>

<script type="text/javascript">
    var tabs = new Tabs();
</script>
```

Implementation on a Joomla! category blog override
```php
<?php if (!empty($this->items)) : ?>
	<div class="tabs">
		<div role="tablist" aria-label="your-label">
		<?php foreach ($this->items as $key => $item) : ?>
			<button role="tab"
					aria-selected="<?php echo $key == 0 ? 'true' : 'false'; ?>"
					aria-controls="<?php echo $item->alias; ?>-tab"
					id="<?php echo $item->alias; ?>"
					<?php echo $key != 0 ? ' tabindex="-1"' : ''; ?>>
				<?php echo $item->title; ?>
			</button>
		<?php endforeach; ?>
		</div>
		
		<?php foreach ($this->items as $key => $item) : ?>
			<div    tabindex="0" 
					role="tabpanel" 
					id="<?php echo $item->alias; ?>-tab"
					aria-labelledby="<?php echo $item->alias; ?>" <?php echo $key == 0 ? '' : 'hidden'; ?>>
					<?php echo $item->text; ?>
			</div>
		<?php endforeach; ?>
	</div>
<?endif; ?>	

<script type="text/javascript">
    var tabs = new Tabs();
</script>
```

# Credits
This [Github repository Tabs](https://github.com/hans2103/tabs) is a forked and adjusted [example of tabs with automatice activation from WAI ARIA Practices by W3.org](https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/#tabpanel). I've added the ability to direct linking to a specific tab. The original files are located on the [Github repo aria-practices](https://github.com/w3c/aria-practices/tree/master/examples/tabs) of W3c.

