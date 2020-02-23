# Generate Insurance Number

### create release package

```
$ rm package.zip
$ zip -r package.zip chrome/
```

### 主保険

```
select distinct hbtnum, '<option value="' || hbtnum || '">[' || hbtnum || '] ' || seidoname || '(' || tanseidoname || ')</option>' from tbl_hknnum where tekstymd <= '2020-02-01' and tekedymd >= '2020-02-01' and hknkohsbtkbn = '1' order by hbtnum;

select distinct hbtnum, '{ houbetsuNum: "' || hbtnum || '", name: "[' || hbtnum || '] ' || seidoname || '(' || tanseidoname || ')" },' from tbl_hknnum where tekstymd <= '2020-02-01' and tekedymd >= '2020-02-01' and hknkohsbtkbn = '1' order by hbtnum;
```

### 公費その他

```
select distinct hbtnum, '<option value="' || hbtnum || '">[' || hbtnum || '] ' || seidoname || '(' || tanseidoname || ')</option>' from tbl_hknnum where tekstymd <= '2020-02-01' and tekedymd >= '2020-02-01' and hknkohsbtkbn != '1' order by hbtnum;

select distinct hbtnum, '{ houbetsuNum: "' || hbtnum || '", name: "[' || hbtnum || '] ' || seidoname || '(' || tanseidoname || ')" },' from tbl_hknnum where tekstymd <= '2020-02-01' and tekedymd >= '2020-02-01' and hknkohsbtkbn != '1' order by hbtnum;
```

### 参考
- https://github.com/miyucy/miyucy.github.io
- https://www.mhlw.go.jp/topics/2008/03/dl/tp0305-1az_0004.pdf
