/**
 * 
 * Schema
 * 
 */

import React from 'react'
import a31eaf2ac from 'store/a31eaf2ac'
import fc2400f3 from 'store/fc2400f3'
import da6383a4 from 'store/da6383a4'
import de23df0b from 'store/de23df0b'
import fa2c0984 from 'store/fa2c0984'
import b80a3d64 from 'store/b80a3d64'
import a99df6f1 from 'store/a99df6f1'
import db1dc367 from 'store/db1dc367'
import e420b937 from 'store/e420b937'
import ac9d12c2 from 'store/ac9d12c2'
import c4ddb684 from 'store/c4ddb684'
import d9024f94 from 'store/d9024f94'
import bfa4b9a6 from 'store/bfa4b9a6'
import c291cmNl from 'store/c291cmNl'
import c3RhdHVz from 'store/c3RhdHVz'
import c3Vic291 from 'store/c3Vic291'
import cHJpb3Jp from 'store/cHJpb3Jp' 
import { Badge } from "reactstrap"

const schema = [
    {
        schemaId: "a31eaf2ac",
        name: 'company',
        title: 'Company List',
        formTitle: 'Company',
        path: '/companies',
        visible: true,
        access: ['get', 'post', 'put', 'delete'],
        ...a31eaf2ac,
        page: 'Company',
        exact: true,
        columns: () => [
            {
                id: "1",
                value: '_id',
                label: 'Id',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "2",
                value: 'sno',
                label: 'S.No',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row, rowIndex) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : rowIndex + 1,
                type: 'text'
            },
            {
                id: "3",
                value: 'actions',
                label: 'Action',
                sort: false,
                editRecord: false,
                viewRecord: true,
                editFormatter: 'actions', 
                type: 'text'
            },
            {
                id: "4",
                value: 'code',
                label: 'Company Code',
                placeholder: 'Enter Company Code',
                sort: true,
                editRecord: true,
                viewRecord: true,
                type: 'text'
            },
            {
                id: "5",
                value: 'name',
                label: 'Company Name',
                placeholder: 'Enter Company Name',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "6",
                value: 'status',
                label: 'Status',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : (
                    <Badge
                        className={`font-size-12 badge rounded-pill ${row.status ? 'bg-success badge-soft-success' : 'bg-danger badge-soft-danger'}`}
                        color={row.badgeclass}
                        pill>
                        {row.status ? 'Active' : 'Inactive'}
                    </Badge>
                ),
                type: 'text'
            },
            {
                id: "7",
                value: 'branches',
                label: 'Branches',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "8",
                value: 'insertedBy',
                label: 'Inserted By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "9",
                value: 'updatedBy',
                label: 'Updated By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "10",
                value: 'createdAt',
                label: 'Created Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "11",
                value: 'updatedAt',
                label: 'Updated Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            }
        ]
    },
    {
        schemaId: "fc2400f3",    
        name: 'branch',
        title: 'Branch List',
        path: '/branch',
        visible: true,
        formTitle: 'Branch',
        access: ['get', 'post', 'put', 'delete'],
        page: "Branch",
        ...fc2400f3,
        columns: () => [
            {
                id: "1",
                value: '_id',
                label: 'Id',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "2",
                value: 'sno',
                label: 'S.No',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row, rowIndex) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : rowIndex + 1,
                type: 'text'
            },
            {
                id: "3",
                value: 'actions',
                label: 'Actions',
                sort: false,
                editRecord: false,
                viewRecord: true,
                editFormatter: 'actions', 
                type: 'text'
            },
            {
                id: "4",
                value: 'companyId',
                label: 'Company',
                placeholder: 'Select Company',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'select',
                colProps: {
                    lg: "6",
                    md: "6",
                    style: { paddingRight: '15px'}
                },
                formatter: (cellContent, row, rowIndex, metaData) => {
                    return metaData && metaData.companyOptions && metaData.companyOptions.length > 0 && metaData.companyOptions.find(_ => _.value.toString() === cellContent.toString()) && metaData.companyOptions.find(_ => _.value === cellContent).label || ''
                },
                options: 'companyOptions'
            },
            {
                id: "5",
                value: 'code',
                label: 'Branch Code',
                placeholder: 'Enter Branch Code',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                colProps: {
                    lg: "6",
                    md: "6",
                    style: { paddingRight: '15px'}
                },
                type: 'text'
            },
            {
                id: "6",
                value: 'name',
                label: 'Branch Name',
                placeholder: 'Enter Branch Name',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                colProps: {
                    lg: "6",
                    md: "6",
                    style: { paddingRight: '15px'}
                },
                type: 'text'
            },
            {
                id: "7",
                value: 'mobileNumber',
                label: 'Mobile Number',
                placeholder: 'Enter Mobile Number',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                colProps: {
                    lg: "6",
                    md: "6",
                    style: { paddingRight: '15px'}
                },
                type: 'text'
            },
            {
                id: "8",
                value: 'email',
                label: 'Email',
                placeholder: 'Enter Email',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                colProps: {
                    lg: "6",
                    md: "6",
                    style: { paddingRight: '15px'}
                },
                type: 'text'
            },
            {
                id: "9",
                value: 'address',
                label: 'Address',
                placeholder: 'Enter Address',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                colProps: {
                    lg: "6",
                    md: "6",
                    style: { paddingRight: '15px'}
                },
                type: 'text'
            },
            {
                id: "10",
                value: 'country',
                label: 'Country',
                placeholder: 'Enter Country',
                sort: true,
                editRecord: true,
                viewRecord: false,
                required: true,
                colProps: {
                    lg: "6",
                    md: "6",
                    style: { paddingRight: '15px'}
                },
                type: 'text'
            },
            {
                id: "11",
                value: 'state',
                label: 'State',
                placeholder: 'Enter State',
                sort: true,
                editRecord: true,
                viewRecord: false,
                required: true,
                colProps: {
                    lg: "6",
                    md: "6",
                    style: { paddingRight: '15px'}
                },
                type: 'text'
            },
            {
                id: "12",
                value: 'city',
                label: 'City',
                placeholder: 'Enter City',
                sort: true,
                editRecord: true,
                viewRecord: false,
                required: true,
                colProps: {
                    lg: "6",
                    md: "6",
                    style: { paddingRight: '15px'}
                },
                type: 'text'
            },
            {
                id: "13",
                value: 'pincode',
                label: 'Pin Code',
                placeholder: 'Enter Pin Code',
                sort: true,
                editRecord: true,
                viewRecord: false,
                required: true,
                colProps: {
                    lg: "6",
                    md: "6",
                    style: { paddingRight: '15px'}
                },
                type: 'text'
            },
            {
                id: "14",
                value: 'status',
                label: 'Status',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : (
                    <Badge
                        className={`font-size-12 badge rounded-pill ${row.status ? 'bg-success badge-soft-success' : 'bg-danger badge-soft-danger'}`}
                        color={row.badgeclass}
                        pill>
                        {row.status ? 'Active' : 'Inactive'}
                    </Badge>
                ),
                type: 'text'
            },
            {
                id: "15",
                value: 'insertedBy',
                label: 'Inserted By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "16",
                value: 'updatedBy',
                label: 'Updated By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "17",
                value: 'createdAt',
                label: 'Created Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "18",
                value: 'updatedAt',
                label: 'Updated Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            }
        ]
    },
    {
        schemaId: "da6383a4",    
        name: 'country',
        title: 'Country List',
        path: '/countries',
        visible: true,
        formTitle: 'Country',
        access: ['get'],
        page: "Country",
        ...da6383a4,
        columns: () => [
            {
                id: "1",
                value: '_id',
                label: 'Id',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "2",
                value: 'sno',
                label: 'S.No',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row, rowIndex) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : rowIndex + 1,
                type: 'text'
            },
            {
                id: "3",
                value: 'shortName',
                label: 'Country Code',
                placeholder: 'Enter Country Code',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "4",
                value: 'name',
                label: 'Country Name',
                placeholder: 'Enter Country Name',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "5",
                value: 'dialCode',
                label: 'Dial Code',
                placeholder: 'Enter Dial Code',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "6",
                value: 'status',
                label: 'Status',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : (
                    <Badge
                        className={`font-size-12 badge rounded-pill ${row.status ? 'bg-success badge-soft-success' : 'bg-danger badge-soft-danger'}`}
                        color={row.badgeclass}
                        pill>
                        {row.status ? 'Active' : 'Inactive'}
                    </Badge>
                ),
                type: 'text'
            },
            {
                id: "7",
                value: 'createdAt',
                label: 'Created Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "8",
                value: 'updatedAt',
                label: 'Updated Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            }
        ]
    },
    {
        schemaId: "a99df6f1",    
        name: 'state',
        title: 'State List',
        path: '/status',
        visible: true,
        formTitle: 'State',
        access: ['get'],
        page: "State",
        ...a99df6f1,
        columns: () => [
            {
                id: "1",
                value: '_id',
                label: 'Id',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "2",
                value: 'sno',
                label: 'S.No',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row, rowIndex) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : rowIndex + 1,
                type: 'text'
            },
            {
                id: "3",
                value: 'code',
                label: 'State Code',
                placeholder: 'Enter State Code',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "4",
                value: 'name',
                label: 'State Name',
                placeholder: 'Enter State Name',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "5",
                value: 'countryName',
                label: 'Country Name',
                sort: true,
                editRecord: false,
                viewRecord: true,
                type: 'text'
            },
            {
                id: "6",
                value: 'status',
                label: 'Status',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : (
                    <Badge
                        className={`font-size-12 badge rounded-pill ${row.status ? 'bg-success badge-soft-success' : 'bg-danger badge-soft-danger'}`}
                        color={row.badgeclass}
                        pill>
                        {row.status ? 'Active' : 'Inactive'}
                    </Badge>
                ),
                type: 'text'
            },
            {
                id: "7",
                value: 'createdAt',
                label: 'Created Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "8",
                value: 'updatedAt',
                label: 'Updated Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            }
        ]
    },
    {
        schemaId: "db1dc367",    
        name: 'city',
        title: 'City List',
        path: '/cities',
        visible: true,
        formTitle: 'City',
        access: ['get'],
        page: "City",
        ...db1dc367,
        columns: () => [
            {
                id: "1",
                value: '_id',
                label: 'Id',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "2",
                value: 'sno',
                label: 'S.No',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row, rowIndex) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : rowIndex + 1,
                type: 'text'
            },
            {
                id: "3",
                value: 'Code',
                label: 'City Code',
                placeholder: 'Enter City Code',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "4",
                value: 'name',
                label: 'City Name',
                placeholder: 'Enter City Name',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "5",
                value: 'stateName',
                label: 'State Name',
                sort: true,
                editRecord: false,
                viewRecord: true,
                type: 'text'
            },
            {
                id: "6",
                value: 'status',
                label: 'Status',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : (
                    <Badge
                        className={`font-size-12 badge rounded-pill ${row.status ? 'bg-success badge-soft-success' : 'bg-danger badge-soft-danger'}`}
                        color={row.badgeclass}
                        pill>
                        {row.status ? 'Active' : 'Inactive'}
                    </Badge>
                ),
                type: 'text'
            },
            {
                id: "7",
                value: 'createdAt',
                label: 'Created Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "8",
                value: 'updatedAt',
                label: 'Updated Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            }
        ]
    },
    {
        schemaId: "fa2c0984",    
        name: 'department',
        title: 'Department List',
        path: '/department',
        visible: true,
        formTitle: 'Department',
        access: ['get', 'post', 'put', 'delete'],
        page: "Department",
        ...fa2c0984,
        columns: () => [
            {
                id: "1",
                value: '_id',
                label: 'Id',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "2",
                value: 'sno',
                label: 'S.No',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row, rowIndex) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : rowIndex + 1,
                type: 'text'
            },
            {
                id: "3",
                value: 'actions',
                label: 'Actions',
                sort: false,
                editRecord: false,
                viewRecord: true,
                editFormatter: 'actions',
                type: 'text'
            },
            {
                id: "4",
                value: 'code',
                label: 'Department Code',
                placeholder: 'Enter Department Code',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "5",
                value: 'name',
                label: 'Department Name',
                placeholder: 'Enter Department Name',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "6",
                value: 'status',
                label: 'Status',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : (
                    <Badge
                        className={`font-size-12 badge rounded-pill ${row.status ? 'bg-success badge-soft-success' : 'bg-danger badge-soft-danger'}`}
                        color={row.badgeclass}
                        pill>
                        {row.status ? 'Active' : 'Inactive'}
                    </Badge>
                ),
                type: 'text'
            },
            {
                id: "7",
                value: 'branches',
                label: 'Branches',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "8",
                value: 'insertedBy',
                label: 'Inserted By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "9",
                value: 'updatedBy',
                label: 'Updated By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "10",
                value: 'createdAt',
                label: 'Created Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "11",
                value: 'updatedAt',
                label: 'Updated Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            }
        ]
    },
    {
        schemaId: "b80a3d64",    
        name: 'designation',
        title: 'Designation List',
        path: '/designation',
        visible: true,
        formTitle: 'Designation',
        access: ['get', 'post', 'put', 'delete'],
        page: "Designation",
        ...b80a3d64,
        columns: () => [
            {
                id: "1",
                value: '_id',
                label: 'Id',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "2",
                value: 'sno',
                label: 'S.No',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row, rowIndex) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : rowIndex + 1,
                type: 'text'
            },
            {
                id: "3",
                value: 'actions',
                label: 'Actions',
                sort: false,
                editRecord: false,
                viewRecord: true,
                editFormatter: "actions",
                type: 'text'
            },
            {
                id: "4",
                value: 'departmentId',
                label: 'Department',
                placeholder: 'Select Department',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                formatter: (cellContent, row, rowIndex, metaData) => {
                    return metaData && metaData.departmentOptions && metaData.departmentOptions.length > 0 && metaData.departmentOptions.find(_ => _.value === cellContent) && metaData.departmentOptions.find(_ => _.value === cellContent).label || ''
                },
                type: 'select',
                options: 'departmentOptions'
            },
            {
                id: "6",
                value: 'code',
                label: 'Designation Code',
                placeholder: 'Enter Designation Code',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "5",
                value: 'name',
                label: 'Designation Name',
                placeholder: 'Enter Designation Name',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "7",
                value: 'status',
                label: 'Status',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : (
                    <Badge
                        className={`font-size-12 badge rounded-pill ${row.status ? 'bg-success badge-soft-success' : 'bg-danger badge-soft-danger'}`}
                        color={row.badgeclass}
                        pill>
                        {row.status ? 'Active' : 'Inactive'}
                    </Badge>
                ),
                type: 'text'
            },
            {
                id: "8",
                value: 'insertedBy',
                label: 'Inserted By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "9",
                value: 'updatedBy',
                label: 'Updated By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "10",
                value: 'createdAt',
                label: 'Created Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "11",
                value: 'updatedAt',
                label: 'Updated Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            }
        ]
    },
    {
        schemaId: "e420b937",
        name: 'Document',
        title: 'Document List',
        formTitle: 'Document',
        path: '/document',
        visible: true,
        access: ['get', 'post', 'put', 'delete'],
        ...e420b937,
        page: 'Document',
        exact: true,
        columns: () => [
            {
                id: "1",
                value: '_id',
                label: 'Id',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "2",
                value: 'sno',
                label: 'S.No',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row, rowIndex) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : rowIndex + 1,
                type: 'text'
            },
            {
                id: "3",
                value: 'actions',
                label: 'Action',
                sort: false,
                editRecord: false,
                viewRecord: true,
                editFormatter: 'actions', 
                type: 'text'
            },
            {
                id: "4",
                value: 'documentName',
                label: 'Document Name',
                placeholder: 'Enter Document Name',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "5",
                value: 'description',
                label: 'Description',
                placeholder: 'Enter Description ',
                sort: true,
                editRecord: true,
                viewRecord: true,
                type: 'text'
            },
            {
                id: "6",
                value: 'status',
                label: 'Status',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : (
                    <Badge
                        className={"font-size-12 badge-soft-success badge bg-success rounded-pill"}
                        color={row.badgeclass}
                        pill>
                        {row.status ? 'Active' : 'Inactive'}
                    </Badge>
                ),
                type: 'text'
            },
            {
                id: "7",
                value: 'branches',
                label: 'Branches',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "8",
                value: 'insertedBy',
                label: 'Inserted By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "9",
                value: 'updatedBy',
                label: 'Updated By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "10",
                value: 'createdAt',
                label: 'Created Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "11",
                value: 'updatedAt',
                label: 'Updated Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            }
        ]
    },
    {
        schemaId: "ac9d12c2",
        name: 'Question',
        title: 'Question List',
        formTitle: 'Question',
        path: '/questionslist',
        visible: true,
        access: ['get', 'post', 'put', 'delete'],
        ...ac9d12c2,
        page: 'Questionnaire',
        exact: true,
        columns: () => [
            {
                id: "1",
                value: '_id',
                label: 'Id',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "2",
                value: 'sno',
                label: 'S.No',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row, rowIndex) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : rowIndex + 1,
                type: 'text'
            },
            {
                id: "3",
                value: 'actions',
                label: 'Action',
                sort: false,
                editRecord: false,
                viewRecord: true,
                editFormatter: 'actions', 
                type: 'text'
            },
            {
                id: "4",
                value: 'question',
                label: 'Question',
                placeholder: 'Enter question',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "5",
                value: 'option1',
                label: 'Option 1',
                sort: false,
                editRecord: true,
                viewRecord: true,
                formatter: (cellContent, row) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : (
                    <p>
                        <p>{row.option1}</p>
                    </p>
                    
                ),
                type: 'text'
            },
            {
                id: "6",
                value: 'option2',
                label: 'Option 2',
                sort: false,
                editRecord: true,
                viewRecord: true,
                formatter: (cellContent, row) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : (
                    <p>
                        <p>{row.option2}</p>
                    </p>
                    
                ),
                type: 'text'
            },
            {
                id: "5",
                value: 'option3',
                label: 'Option 3',
                sort: false,
                editRecord: true,
                viewRecord: true,
                formatter: (cellContent, row) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : (
                    <p>
                        <p>{row.option3}</p>
                    </p>
                    
                ),
                type: 'text'
            },
            {
                id: "5",
                value: 'option4',
                label: 'Option 4',
                sort: false,
                editRecord: true,
                viewRecord: true,
                formatter: (cellContent, row) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : (
                    <p>
                        <p>{row.option4}</p>
                    </p>
                    
                ),
                type: 'text'
            },
            {
                id: "6",
                value: 'answer',
                label: 'Answer',
                sort: false,
                editRecord: false,
                viewRecord: false,
                formatter: (cellContent, row) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : (
                    <p>
                        <p>{row.answer}</p>
                    </p>
                    
                ),
                type: 'text'
            },
            {
                id: "7",
                value: 'status',
                label: 'Status',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : (
                    <Badge
                        className={"font-size-12 badge-soft-success badge bg-success rounded-pill"}
                        color={row.badgeclass}
                        pill>
                        {row.status ? 'Active' : 'Inactive'}
                    </Badge>
                ),
                type: 'text'
            },
            {
                id: "8",
                value: 'branches',
                label: 'Branches',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "9",
                value: 'insertedBy',
                label: 'Inserted By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "10",
                value: 'updatedBy',
                label: 'Updated By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "11",
                value: 'createdAt',
                label: 'Created Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "12",
                value: 'updatedAt',
                label: 'Updated Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            }
        ]
    },
    {
        schemaId: "de23df0b",
        name: 'Factor',
        title: 'Two Factor Authentication',
        formTitle: 'Two Factor Authentication',
        path: '/twofactorautentication',
        visible: true,
        access: ['get', 'post', 'put', 'delete'],
        ...de23df0b,
        page: 'Factor',
        columns: () => [
            {
                id: "1",
                value: '_id',
                label: 'Id',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "2",
                value: 'sno',
                label: 'S.No',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row, rowIndex) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : rowIndex + 1,
                type: 'text'
            },
            {
                id: "3",
                value: 'actions',
                label: 'Action',
                sort: false,
                editRecord: false,
                viewRecord: true,
                editFormatter: 'actions',
                type: 'text'
            },
            {
                id: "4",
                value: 'factorName',
                label: 'Factor Name',
                placeholder: 'Enter Factor Name',
                sort: false,
                editRecord: true,
                viewRecord: true,
                required: true,
                formatter: (cellContent, row) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : row.factorName,
                type: 'text'
            },
            {
                id: "5",
                value: 'description',
                label: 'Description',
                placeholder: 'Enter Description',
                sort: false,
                editRecord: true,
                viewRecord: true,
                formatter: (cellContent, row) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : row.description,
                type: 'text'
            },
            {
                id: "6",
                value: 'status',
                label: 'Status',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : (
                    <Badge
                        className={`font-size-12 badge rounded-pill ${row.status ? 'bg-success badge-soft-success' : 'bg-danger badge-soft-danger'}`}
                        color={row.badgeclass}
                        pill>
                        {row.status ? 'Verified' : 'Failed'}
                    </Badge>
                ),
                type: 'text'
            },
            {
                id: "7",
                value: 'branches',
                label: 'Branches',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "8",
                value: 'insertedBy',
                label: 'Inserted By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "9",
                value: 'updatedBy',
                label: 'Updated By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "10",
                value: 'createdAt',
                label: 'Created Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "11",
                value: 'updatedAt',
                label: 'Updated Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            }
        ]
    },
    {
        schemaId: "c4ddb684",
        name: 'role',
        title: 'Role List',
        formTitle: 'Role',
        path: '/userrole',
        visible: true,
        access: ['get', 'post', 'put', 'delete'],
        ...c4ddb684,
        page: 'Role',
        exact: true,
        columns: () => [
            {
                id: "1",
                value: '_id',
                label: 'Id',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "2",
                value: 'sno',
                label: 'S.No',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row, rowIndex) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : rowIndex + 1,
                type: 'text'
            },
            {
                id: "3",
                value: 'actions',
                label: 'Action',
                sort: false,
                editRecord: false,
                viewRecord: true,
                editFormatter: 'actions', 
                formatterStyle: { width: '100%'},
                type: 'text'
            },
            {
                id: "4",
                value: 'name',
                label: 'Role Name',
                placeholder: 'Enter Role Name',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "5",
                value: 'shortName',
                label: 'Code',
                placeholder: 'Enter Code',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "6",
                value: 'mode',
                label: 'Mode',
                placeholder: 'Enter Mode',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'radio',
                options: [
                    {
                        label: 'Primary User',
                        value: 'primary'
                    },
                    {
                        label: 'Secondary User',
                        value: 'secondary'
                    }
                ]
            },
            {
                id: "7",
                value: 'description',
                label: 'Description',
                placeholder: 'Enter Description',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'textarea'
            },
            {
                id: "8",
                value: 'permission',
                label: 'Permission',
                placeholder: 'Enter Permission',
                editRecord: true,
                viewRecord: false,
                type: 'table'
            },
            {
                id: "9",
                value: 'status',
                label: 'Status',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : (
                    <Badge
                        className={`font-size-12 badge rounded-pill ${row.status ? 'bg-success badge-soft-success' : 'bg-danger badge-soft-danger'}`}
                        color={row.badgeclass}
                        pill>
                        {row.status ? 'Active' : 'Inactive'}
                    </Badge>
                ),
                type: 'text'
            },
            {
                id: "10",
                value: 'insertedBy',
                label: 'Inserted By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "11",
                value: 'updatedBy',
                label: 'Updated By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "12",
                value: 'createdAt',
                label: 'Created Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "13",
                value: 'updatedAt',
                label: 'Updated Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            }
        ]
    },
    {
        schemaId: "d9024f94",
        name: 'access',
        title: 'Access List',
        formTitle: 'Access',
        path: '/access',
        visible: true,
        access: ['get', 'post', 'put', 'delete'],
        ...d9024f94,
        page: 'Access',
        exact: true,
        columns: () => [
            {
                id: "1",
                value: '_id',
                label: 'Id',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "2",
                value: 'sno',
                label: 'S.No',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row, rowIndex) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : rowIndex + 1,
                type: 'text'
            },
            {
                id: "3",
                value: 'actions',
                label: 'Action',
                sort: false,
                editRecord: false,
                viewRecord: true,
                editFormatter: 'actions', 
                type: 'text'
            },
            {
                id: "4",
                value: 'accessName',
                label: 'Access Name',
                placeholder: 'Enter Access Name',
                sort: true,
                editRecord: true,
                viewRecord: true,
                type: 'text'
            },
            {
                id: "5",
                value: 'accessDescription',
                label: 'Access Description',
                placeholder: 'Enter Access Description',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "6",
                value: 'status',
                label: 'Status',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : (
                    <Badge
                        className={`font-size-12 badge rounded-pill ${row.status ? 'bg-success badge-soft-success' : 'bg-danger badge-soft-danger'}`}
                        color={row.badgeclass}
                        pill>
                        {row.status ? 'Active' : 'Inactive'}
                    </Badge>
                ),
                type: 'text'
            },
            {
                id: "7",
                value: 'insertedBy',
                label: 'Inserted By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "8",
                value: 'updatedBy',
                label: 'Updated By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "9",
                value: 'createdAt',
                label: 'Created Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "10",
                value: 'updatedAt',
                label: 'Updated Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            }
        ]
    },
    {
        schemaId: "bfa4b9a6",
        name: 'menu',
        title: 'Menu List',
        formTitle: 'Menu',
        path: '/menu',
        visible: true,
        access: ['get', 'post', 'put', 'delete'],
        ...bfa4b9a6,
        page: 'Menu',
        exact: true,
        columns: (record = {}) => [
            {
                id: "1",
                value: '_id',
                label: 'Id',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "2",
                value: 'sno',
                label: 'S.No',
                sort: false,
                editRecord: false,
                viewRecord: false,
                formatter: (cellContent, row, rowIndex) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : rowIndex + 1,
                type: 'text'
            },
            {
                id: "3",
                value: 'actions',
                label: 'Action',
                sort: false,
                editRecord: false,
                viewRecord: false,
                editFormatter: 'actions', 
                type: 'text'
            },
            {
                id: "3",
                value: 'menuType',
                label: 'Menu Type',
                placeholder: 'Enter Menu Type',
                sort: true,
                editRecord: true,
                viewRecord: false,
                required: true,
                type: 'select',
                options: [
                    {
                        label: 'Menu Header',
                        value: 'menuHeader'
                    },
                    {
                        label: 'Menu Sub Header',
                        value: 'menuSubHeader'
                    },
                    {
                        label: 'Menu Item',
                        value: 'menuItem'
                    }
                ]
            },
            {
                id: "4",
                value: 'menuReferenceId',
                label: 'Header Menu',
                placeholder: 'Select Header Menu',
                sort: true,
                editRecord: record.menuType && record.menuType === 'menuSubHeader' ? true : false,
                viewRecord: false,
                required: true,
                type: 'select',
                options: 'menuHeaderOptions'
            },
            {
                id: "5",
                value: 'menuReferenceId',
                label: 'Sub Header Menu',
                placeholder: 'Select Sub Header Menu',
                sort: true,
                editRecord: record.menuType && record.menuType === 'menuItem' ? true : false,
                viewRecord: false,
                required: true,
                type: 'select',
                options: 'menuSubHeaderOptions'
            },
            {
                id: "6",
                value: 'menuName',
                label: 'Menu Name',
                placeholder: 'Enter Menu Name',
                sort: true,
                editRecord: true,
                viewRecord: false,
                required: true,
                colProps: {
                    lg: "6",
                    md: "6",
                    style: { paddingRight: '15px'}
                },
                type: 'text'
            },
            {
                id: "7",
                value: 'menukey',
                label: 'Menu Key',
                placeholder: 'Enter Menu Key',
                sort: true,
                editRecord: true,
                viewRecord: false,
                required: true,
                colProps: {
                    lg: "6",
                    md: "6",
                    style: { paddingRight: '15px'}
                },
                type: 'text'
            },
            {
                id: "8",
                value: 'accMain',
                label: 'Access Main',
                placeholder: 'Enter Access Main',
                sort: true,
                editRecord: false,
                viewRecord: false,
                type: 'checkbox'
            },
            {
                id: "9",
                value: 'isNew',
                label: 'Is New',
                placeholder: 'Enter Access Main',
                sort: true,
                editRecord: true,
                viewRecord: false,
                colProps: {
                    lg: "6",
                    md: "6",
                    style: { paddingRight: '15px'}
                },
                type: 'checkbox'
            },
            {
                id: "10",
                value: 'tagname',
                label: 'Tag Name',
                placeholder: 'Enter Tag Name',
                sort: true,
                editRecord: record.isNew ? true : false,
                defaultValue: 'New',
                viewRecord: false,
                colProps: {
                    lg: "6",
                    md: "6",
                    style: { paddingRight: '15px'}
                },
                type: 'text'
            },
            {
                id: "11",
                value: 'permission',
                label: 'Menu Permission',
                placeholder: 'Enter Menu Permission',
                sort: true,
                editRecord: true,
                viewRecord: false,
                type: 'multiSelect',
                options: 'accessOptions'
            },
            {
                id: "12",
                value: 'insertedBy',
                label: 'Inserted By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "13",
                value: 'updatedBy',
                label: 'Updated By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "14",
                value: 'createdAt',
                label: 'Created Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "15",
                value: 'updatedAt',
                label: 'Updated Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            }
        ]
    },
    {
        schemaId: "c291cmNl",
        name: 'source',
        title: 'Source List',
        formTitle: 'Source',
        path: '/source',
        visible: true,
        access: ['get', 'post', 'put', 'delete'],
        ...c291cmNl,
        page: 'Source',
        exact: true,
        columns: () => [
            {
                id: "1",
                value: '_id',
                label: 'Id',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "2",
                value: 'sno',
                label: 'S.No',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row, rowIndex) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : rowIndex + 1,
                type: 'text'
            },
            {
                id: "3",
                value: 'actions',
                label: 'Action',
                sort: false,
                editRecord: false,
                viewRecord: true,
                editFormatter: 'actions', 
                type: 'text'
            },
            {
                id: "4",
                value: 'code',
                label: 'Source Code',
                placeholder: 'Enter Source Code',
                sort: true,
                editRecord: true,
                viewRecord: true,
                type: 'text'
            },
            {
                id: "5",
                value: 'sourceName',
                label: 'Source Name',
                placeholder: 'Enter Source Name',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "6",
                value: 'status',
                label: 'Status',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : (
                    <Badge
                        className={`font-size-12 badge rounded-pill ${row.status ? 'bg-success badge-soft-success' : 'bg-danger badge-soft-danger'}`}
                        color={row.badgeclass}
                        pill>
                        {row.status ? 'Active' : 'Inactive'}
                    </Badge>
                ),
                type: 'text'
            },
            {
                id: "7",
                value: 'branches',
                label: 'Branches',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "8",
                value: 'insertedBy',
                label: 'Inserted By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "9",
                value: 'updatedBy',
                label: 'Updated By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "10",
                value: 'createdAt',
                label: 'Created Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "11",
                value: 'updatedAt',
                label: 'Updated Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            }
        ]
    },
    {
        schemaId: "c3RhdHVz",
        name: 'process_status',
        title: 'Process Status',
        formTitle: 'Process Status',
        path: '/processstatus',
        visible: true,
        access: ['get', 'post', 'put', 'delete'],
        ...c3RhdHVz,
        page: 'ProcessStatus',
        exact: true,
        columns: () => [
            {
                id: "1",
                value: '_id',
                label: 'Id',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "2",
                value: 'sno',
                label: 'S.No',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row, rowIndex) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : rowIndex + 1,
                type: 'text'
            },
            {
                id: "3",
                value: 'actions',
                label: 'Action',
                sort: false,
                editRecord: false,
                viewRecord: true,
                editFormatter: 'actions', 
                type: 'text'
            },
            {
                id: "4",
                value: 'processStatus',
                label: 'Process Status',
                placeholder: 'Enter Process Status',
                sort: true,
                editRecord: true,
                viewRecord: true,
                type: 'text'
            },
            {
                id: "5",
                value: 'shortCode',
                label: 'Short Code ',
                placeholder: 'Enter Short Code',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "6",
                value: 'description',
                label: 'Description',
                placeholder: 'Enter Description',
                sort: true,
                editRecord: true,
                viewRecord: true,
                type: 'text'
            },
            {
                id: "7",
                value: 'colorCode',
                label: 'Color Code ',
                placeholder: 'Enter Color Code',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "8",
                value: 'status',
                label: 'Status',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : (
                    <Badge
                        className={`font-size-12 badge rounded-pill ${row.status ? 'bg-success badge-soft-success' : 'bg-danger badge-soft-danger'}`}
                        color={row.badgeclass}
                        pill>
                        {row.status ? 'Active' : 'Inactive'}
                    </Badge>
                ),
                type: 'text'
            },
            {
                id: "9",
                value: 'branches',
                label: 'Branches',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "10",
                value: 'insertedBy',
                label: 'Inserted By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "11",
                value: 'updatedBy',
                label: 'Updated By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "12",
                value: 'createdAt',
                label: 'Created Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "13",
                value: 'updatedAt',
                label: 'Updated Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            }
        ]
    },
    {
        schemaId: "c3Vic291",
        name: 'sub_source',
        title: 'Sub Source List',
        formTitle: 'SubSource',
        path: '/subsource',
        visible: true,
        access: ['get', 'post', 'put', 'delete'],
        ...c3Vic291,
        page: 'SubSource',
        exact: true,
        columns: () => [
            {
                id: "1",
                value: '_id',
                label: 'Id',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "2",
                value: 'sno',
                label: 'S.No',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row, rowIndex) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : rowIndex + 1,
                type: 'text'
            },
            {
                id: "3",
                value: 'actions',
                label: 'Action',
                sort: false,
                editRecord: false,
                viewRecord: true,
                editFormatter: 'actions', 
                type: 'text'
            },
            {
                id: "4",
                value: 'code',
                label: 'Sub Source Code',
                placeholder: 'Enter Sub Source Code',
                sort: true,
                editRecord: true,
                viewRecord: true,
                type: 'text'
            },
            {
                id: "5",
                value: 'subSourceName',
                label: ' Sub Source Name',
                placeholder: 'Enter Sub Source Name',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "5",
                value: 'sourceId',
                label: 'Source Id Name',
                placeholder: 'Enter Source Id Name',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "6",
                value: 'status',
                label: 'Status',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : (
                    <Badge
                        className={`font-size-12 badge rounded-pill ${row.status ? 'bg-success badge-soft-success' : 'bg-danger badge-soft-danger'}`}
                        color={row.badgeclass}
                        pill>
                        {row.status ? 'Active' : 'Inactive'}
                    </Badge>
                ),
                type: 'text'
            },
            {
                id: "7",
                value: 'branches',
                label: 'Branches',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "8",
                value: 'insertedBy',
                label: 'Inserted By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "9",
                value: 'updatedBy',
                label: 'Updated By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "10",
                value: 'createdAt',
                label: 'Created Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "11",
                value: 'updatedAt',
                label: 'Updated Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            }
        ]
    },
    {
        schemaId: "cHJpb3Jp",
        name: 'priority',
        title: 'Priority List',
        formTitle: 'Priority',
        path: '/priority',
        visible: true,
        access: ['get', 'post', 'put', 'delete'],
        ...cHJpb3Jp,
        page: 'Priority',
        exact: true,
        columns: () => [ 
            {
                id: "1",
                value: '_id',
                label: 'Id',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "2",
                value: 'sno',
                label: 'S.No',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row, rowIndex) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : rowIndex + 1,
                type: 'text'
            },
            {
                id: "3",
                value: 'actions',
                label: 'Action',
                sort: false,
                editRecord: false,
                viewRecord: true,
                editFormatter: 'actions', 
                type: 'text'
            },
            {
                id: "4",
                value: 'shortCode',
                label: 'short Code',
                placeholder: 'Enter short Code',
                sort: true,
                editRecord: true,
                viewRecord: true,
                type: 'text'
            },
            {
                id: "5",
                value: 'priority',
                label: ' priority Name',
                placeholder: 'Enter priority Name',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "5",
                value: 'colorCode',
                label: 'colorCode Name',
                placeholder: 'Enter colorCode Name',
                sort: true,
                editRecord: true,
                viewRecord: true,
                required: true,
                type: 'text'
            },
            {
                id: "6",
                value: 'status',
                label: 'Status',
                sort: false,
                editRecord: false,
                viewRecord: true,
                formatter: (cellContent, row) => row.loading ? (
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                ) : (
                    <Badge
                        className={`font-size-12 badge rounded-pill ${row.status ? 'bg-success badge-soft-success' : 'bg-danger badge-soft-danger'}`}
                        color={row.badgeclass}
                        pill>
                        {row.status ? 'Active' : 'Inactive'}
                    </Badge>
                ),
                type: 'text'
            },
            {
                id: "7",
                value: 'branches',
                label: 'Branches',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "8",
                value: 'insertedBy',
                label: 'Inserted By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "9",
                value: 'updatedBy',
                label: 'Updated By',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "10",
                value: 'createdAt',
                label: 'Created Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            },
            {
                id: "11",
                value: 'updatedAt',
                label: 'Updated Date',
                sort: false,
                editRecord: false,
                viewRecord: false,
                type: 'text'
            }
        ]
    },
]


export default schema