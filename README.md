This API is meant to convert unix time stamps to a string date

OR

To convert a string date to a unix time stamp.

All data sent from this API will be in JSON format.


Example usage:
https://<application>.com/December%2015,%202015
https://<application>.com/1450137600

Example output:
{ "unix": 1450137600, "natural": "December 15, 2015" }