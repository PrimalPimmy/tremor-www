
# stats

 The stats module contains functions for aggregating statistical measures of various events.

 ## Size
 When using stats aggregate functions size in memory becomes an important factor from a capacity planning perspective. The exact size of a window using aggregates depends on three main factors:

 The size of the dimension identifier. I.e. if the window is identified by the string "window" it will require that amount of memory related to this. If it is identified by an array of 10.000 elements all reading "window" it will use (about) 10.000 times that size.
 The unit size of each aggregate used in the window. We will try to give an estimate of size for each aggregate but please be aware that those are not always exact as they can depend on the data they hold.
 The number of groups, if grouping is configured. Each group will maintain a separate window of data
 For aggregates we'll provide an "order of magnitude" and a growth rate if applicable.

 For example Fixed, 10 bytes indicate that the size doesn't grow and is in the order of two digit bytes. We try to give pessimistic estimates where possible.
## Functions

### var(number)

Calculates the sample variance of event values in the current windowed operation.

* size: Fixed, 100 bytes

Returns a `float`

### max(number)

Determines the largest event value in the current windowed operation.

* size: Fixed, 10 bytes

Returns a `number`

### sum(number)

Determines the arithmetic sum of event values in the current windowed operation.

* size: Fixed, 10 bytes

Returns a `number`

### dds(number, array)

Uses a Distributed data-stream Sketch ( DDS ([paper](http://www.vldb.org/pvldb/vol12/p2195-masson.pdf)) Histogram to calculate count, min, max, mean
and quartiles with quartile relative-error accurate over the range of points in the histogram.
The DDS histogram trades off accuracy ( to a very low error and guaranteed low relative error )
and unlike HDR histograms does not need bounds specified.

size: Fixed, 10 Kilo Bytes (estimate based on [this paper](https://arxiv.org/pdf/1908.10693.pdf))

> ```tremor
> aggr::stats::hdr(event.value, ["0.5","0.75","0.9","0.99","0.999"])
>  ```

Returns a `record` (all values are floats)

### hdr(number, array)

Uses a High Dynamic Range ( HDR ) Histogram to calculate all basic statistics against the event
values sin the current windowed operation. The function additionally interpolates percentiles or
quartiles based on a configuration specification passed in as an argument to the aggregater
function.

The HDR Histogram trades off memory utilisation for accuracy and is configured internally to
limit accuracy to 2 significant decimal places.

* size: Fixed, 100 Kilo Bytes (note: this strongly depends on configuration, and can be estimated
more correctly with [this formula](https://github.com/HdrHistogram/HdrHistogram#footprint-estimation))

> ```tremor
> aggr::stats::hdr(event.value, ["0.5","0.75","0.9","0.99","0.999"])
>  ```

Returns a `record` (all values are integers)


### count()

Counts the number of events aggregated in the current windowed operation.

* size: Fixed, 10 bytes

Returns a `integer`

### min(number)

Determines the smallest event value in the current windowed operation.

* size: Fixed, 10 bytes

Returns a `number`

### mean(number)

Calculates the stastical mean of the event values in the current windowed operation.

* size: Fixed, 100 bytes

Returns a `float`

### stdev(number)

Calculates the sample standard deviation of event values in the current windowed operation.

* size: Fixed, 100 bytes

Returns a `float`
