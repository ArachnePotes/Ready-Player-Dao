text = open('DaoBase\database\Data_csv\DevActivity.csv','r')
end = open('DaoBase\database\DevActivity.sql','w')
count = 0
for line in text:
    count += 1
    li = line.split(',')
    end.write(f'''
INSERT INTO readyplayerdao.devactivity (dev_activity_id,last_update,launch_date,is_active)
VALUES ({count},{li[0]},{li[1]},{li[2]});
              ''')