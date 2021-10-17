# Create Images with Variables


## Set-up

1. Install node.js: https://nodejs.org/en/download/
2. Put all your images in this folder
3. Check file extension and adjust script if not a jpeg


## Create CSV

In your terminal navigate to this folder and run the following command.

```
node create-csv-from-jpegs.js
``` 

## Generate Images

1. Create a photoshop file with your example output. 
2. Name the layers of each variable the same as the column name in the csv.
3. Make a hidden text layer named id. This will be used to name the files when you export.
4. Go to image/variables and set the variables to be the correct layer.
5. Import your csv as the data set and check the "User First Column for Data Set Names" and "Replace Existing Data Sets" options.
6. Click the arrow to preview your import and then click "OK".
7. Go to File/Export/Datasets as Files and have the file nameing first column set to "Data Set Name". This will name each file the column id value in your csv.
8. Batch process the psd files to jpg with photoshop


### References

[Photoshop Variables - Export files with original name](https://www.youtube.com/watch?v=1PYu9dsaE5I&t=102s)

[Photoshop Variables - Michael Andrew Photography Blog](http://www.michaelthemaven.com/?postID=1703&photoshop-variables)

[Photoshop Batch Action](https://design.tutsplus.com/tutorials/how-to-create-a-photoshop-batch-action--cms-32877)


